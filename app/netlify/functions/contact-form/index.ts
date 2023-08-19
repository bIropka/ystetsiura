import type { HandlerEvent } from '@netlify/functions'
import sgMail from '@sendgrid/mail'
import { apiKey, configIsValid, messageTo } from './mailer'
import { ContactFormDataType } from '~/types'

const handler = async (event: HandlerEvent) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'METHOD NOT ALLOWED' }),
      headers: {
        Allow: 'POST',
      },
    }
  }

  const isValidOrError = configIsValid()
  if (isValidOrError !== true) {
    return {
      statusCode: 500,
      body: JSON.stringify(isValidOrError),
    }
  }
  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Empty request!' }),
    }
  }

  const data: ContactFormDataType | null = JSON.parse(event.body) ?? null
  if (data === null) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Empty data.' }),
    }
  }

  sgMail.setApiKey(apiKey)
  sgMail.setTimeout(8000)

  const emails = [await messageTo(data, event.headers.host)]
  try {
    await Promise.all([sgMail.send(emails)])
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Thanks! Your message was sent successfully. I'll try to answer soon.",
      }),
    }
  } catch (e: unknown) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: e instanceof Error ? e.message : e }),
    }
  }
}

export { handler }

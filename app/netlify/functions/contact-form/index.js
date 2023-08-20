import sgMail from '@sendgrid/mail'
import { apiKey, configIsValid, messageTo } from './mailer'

exports.handler = async (event) => {
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

  const data = JSON.parse(event.body) ?? null
  if (data === null) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Empty data.' }),
    }
  }

  sgMail.setApiKey(apiKey)
  sgMail.setTimeout(8000)

  const emails = [await messageTo(data)]
  try {
    await Promise.all([sgMail.send(emails)])
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Success!',
      }),
    }
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: e instanceof Error ? e.message : e }),
    }
  }
}

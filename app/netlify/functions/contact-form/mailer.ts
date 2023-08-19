import * as path from 'path'
import { stripHtml } from 'string-strip-html'
import { renderFile } from 'ejs'
import { ContactFormDataType } from '~/types'

const ejsOpt = {
  async: true,
  cache: true,
}

const { SENDGRID_API_KEY: apiKey = '', FROM_EMAIL: fromEmail = '' } = process.env

const configIsValid = () => {
  if (!apiKey) {
    return {
      message: 'SENDGRID_API_KEY must be defined',
    }
  }

  return true
}

const prepareData = (data: ContactFormDataType) => {
  const result = { ...data }
  data.message = stripHtml(data.message || '', {
    ignoreTags: ['br'],
  }).result.replace(/\r\n|\r|\n/g, '<br>')
  return result
}

const getHtml = async (data: ContactFormDataType, host: string | undefined) => {
  return await renderFile(
    path.join(
      process.cwd(),
      host?.includes('localhost')
        ? '/netlify/functions/contact-form/template.html.ejs'
        : '/template.html.ejs'
    ),
    data,
    ejsOpt
  )
}

const getMsg = (data: ContactFormDataType, html: string) => {
  return {
    to: 'Iegor Stetsiura <biropka@gmail.com>',
    from: `istetsiura.com <${fromEmail}>`,
    subject: `Message from the site visitor`,
    replyTo: `${data.fullname} <${data.email}>`,
    html,
  }
}

const messageTo = async (data: ContactFormDataType, host: string | undefined) => {
  const preparedData = prepareData(data)
  const html = await getHtml(data, host)

  return getMsg(preparedData, html)
}

export { apiKey, configIsValid, messageTo }

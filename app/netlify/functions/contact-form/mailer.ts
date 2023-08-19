import * as path from 'path'
import { stripHtml } from 'string-strip-html'
import { ContactFormDataType } from '../../../types'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ejs = require('ejs')

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

const getHtml = async (data: ContactFormDataType) => {
  return await ejs.renderFile(
    path.join(process.cwd(), '/netlify/functions/contact-form/template.html.ejs'),
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

const messageTo = async (data: ContactFormDataType) => {
  const preparedData = prepareData(data)
  const html = await getHtml(data)

  return getMsg(preparedData, html)
}

export { apiKey, configIsValid, messageTo }

import path from 'path'
import { stripHtml } from 'string-strip-html'
import { renderFile } from 'ejs'

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

const prepareData = (data) => {
  const result = { ...data }
  data.message = stripHtml(data.message || '', {
    ignoreTags: ['br'],
  }).result.replace(/\r\n|\r|\n/g, '<br>')
  return result
}

const getHtml = async (data, host) => {
  return await renderFile(
    path.join(
      host?.includes('localhost') ? process.cwd() : __dirname,
      host?.includes('localhost')
        ? '/netlify/functions/contact-form/template/template.html.ejs'
        : '/template/template.html.ejs'
    ),
    data,
    ejsOpt
  )
}

const getMsg = (data, html) => {
  return {
    to: 'Iegor Stetsiura <biropka@gmail.com>',
    from: `istetsiura.com <${fromEmail}>`,
    subject: `Message from the site visitor`,
    replyTo: `${data.fullname} <${data.email}>`,
    html,
  }
}

const messageTo = async (data, host) => {
  const preparedData = prepareData(data)
  const html = await getHtml(data, host)

  return getMsg(preparedData, html)
}

export { apiKey, configIsValid, messageTo }

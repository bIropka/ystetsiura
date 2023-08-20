// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ejs = require('ejs')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { stripHtml } = require('string-strip-html')

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

const getHtml = async (data) => {
  return await ejs.renderFile(path.join(__dirname, 'templates/template.html.ejs'), data, ejsOpt)
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

const messageTo = async (data) => {
  const preparedData = prepareData(data)
  const html = await getHtml(data)

  return getMsg(preparedData, html)
}

module.exports = {
  apiKey,
  configIsValid,
  messageTo,
}

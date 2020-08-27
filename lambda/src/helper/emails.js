/* eslint-disable compat/compat */
const Mailgun = require('mailgun-js')

const sendConfirmation = async ({ personalInformation, boxes }) => {
  return new Promise((resolve, reject) => {
    const {
      MG_API_KEY: apiKey,
      MG_DOMAIN: domain,
      FROM_EMAIL: fromEmail,
    } = process.env

    const mailgun = Mailgun({
      apiKey,
      domain,
    })

    const formattedData = boxes
      .map(item =>
        [
          `Etiqueta Caixa: ${item.serialNo || ''}`,
          `Lacre 01: ${item.seal01 || ''}`,
          `Lacre 02: ${item.seal02 || ''}`,
          `Descrição: ${item.description || ''}`,
        ].join('\n')
      )
      .join('\n-----------\n\n')

    const mailData = {
      from: `HangarStorage <${fromEmail}>`,
      to: [personalInformation.email],
      subject: '📦 Confirmation Email',
      text: [
        `Hello ${personalInformation.name},\n`,
        `Here is a list of your boxes:\n`,
        `${formattedData}\n`,
        `Best Regards,`,
        `Enzo`,
      ].join('\n'),
    }

    mailgun.messages().send(mailData, err => {
      if (err) return reject(err)
      return resolve()
    })
  })
}

const sendNotification = async data => {
  return new Promise((resolve, reject) => {
    const {
      MG_API_KEY: apiKey,
      MG_DOMAIN: domain,
      FROM_EMAIL: fromEmail,
      NOTIFICATION_EMAIL: toEmail,
    } = process.env

    const mailgun = Mailgun({
      apiKey,
      domain,
    })

    const stringData = JSON.stringify(data, null, 4)
    const mailData = {
      from: `HangarStorage <${fromEmail}>`,
      to: toEmail.split(','),
      subject: '📦Boxes Registered',
      text: `New Application just submitted \n${stringData}`,
    }

    mailgun.messages().send(mailData, err => {
      if (err) return reject(err)
      return resolve()
    })
  })
}

exports.send = async data => {
  try {
    await sendConfirmation(data)
    await sendNotification(data)
  } catch (err) {
    console.error(err)
  }
}

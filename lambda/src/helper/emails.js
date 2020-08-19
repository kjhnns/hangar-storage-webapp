const Mailgun = require('mailgun-js')

const sendConfirmation = async ({ email, firstName }) => {
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

    const mailData = {
      from: `HangarStorage <${fromEmail}>`,
      to: [email],
      subject: '',
      text: ``,
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
      to: toEmail.split("'"),
      subject: 'NEW APPLICATION',
      text: `New Application just submitted \n${stringData}`,
    }

    mailgun.messages().send(mailData, err => {
      if (err) return reject(err)
      return resolve()
    })
  })
}

exports.send = async data => {
  await sendConfirmation(data)
  await sendNotification(data)
}

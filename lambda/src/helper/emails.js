/* eslint-disable compat/compat */
const Mailgun = require('mailgun-js')

const formatBoxData = boxes =>
  boxes
    .map(item =>
      [
        `Etiqueta Caixa: ${item.serialNo || ''}`,
        `Lacre 01: ${item.seal01 || ''}`,
        `Lacre 02: ${item.seal02 || ''}`,
        `Descrição: ${item.description || ''}`,
      ].join('\n')
    )
    .join('\n-----------\n')

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

    const formattedData = formatBoxData(boxes)

    const mailData = {
      from: `HangarStorage <${fromEmail}>`,
      to: [personalInformation.email],
      subject:
        '📦✅ Seu Inventário na Hangar Storage foi registrado com sucesso',
      text: [
        `Olá ${personalInformation.name},\n`,
        `Obrigado por armazenar com a Hangar!`,
        `Abaixo o seu inventário completo:\n`,
        `${formattedData}\n\n`,
        `Quando houver a necessidade de recuperar algum item, entre em contato com os canais de atendimento e solicite através do Número da Etiqueta.\n`,
        `Equipe Hangar Storage 💙`,
        `WhatsApp: (11) 9 9534-7733`,
        `Email: info@hangarstorage.com.br`,
      ].join('\n'),
    }

    mailgun.messages().send(mailData, err => {
      if (err) return reject(err)
      return resolve()
    })
  })
}

const sendNotification = async ({ personalInformation, boxes }) => {
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

    const formatedBoxes = formatBoxData(boxes)
    const formatedPerson = `Name: ${personalInformation.name}\nCPF: ${personalInformation.cpf}\nE-Mail: ${personalInformation.email}`

    const mailData = {
      from: `HangarStorage <${fromEmail}>`,
      to: toEmail.split(','),
      subject: '📦Boxes Registered',
      text: `PERSONAL INFORMATION\n\n${formatedPerson}\n\n\n\nBOXES\n\n${formatedBoxes}`,
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

/* eslint-disable prettier/prettier */
/* eslint-disable compat/compat */
const Airtable = require('airtable')

const emails = require('./helper/emails')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const saveBoxes = async data => {
  return new Promise((resolve, reject) => {
    const { AT_API_KEY: apiKey, AT_BASE, TABLE } = process.env

    Airtable.configure({
      apiKey,
    })

    const base = Airtable.base(AT_BASE)
    base(TABLE).create(data, (err, records) => {
      if (err) return reject(err)
      return resolve(records)
    })
  })
}

const chunkDispatcher = async (data, dispatcher) => {
  if (data.length > 0) {
    const chunk = data.splice(0, 10)
    await dispatcher(chunk)
    await chunkDispatcher(data, dispatcher)
  }
}

exports.handler = async event => {
  const { httpMethod, body } = event

  const { NODE_ENV: environment } = process.env

  const environmentHeader = {
    development: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'OPTIONS,POST',
    },
    production: {
      'content-type': 'application/json',
      'Access-Control-Allow-Methods': 'OPTIONS,POST',
    },
  }

  const { [environment]: headers } = environmentHeader

  if (httpMethod === 'POST') {
    const bodyData = JSON.parse(body)
    const { boxes, personalInformation } = bodyData

    const formattedData = boxes.map(item => ({
      fields: {
        'Box Serial Number': item.serialNo || '',
        'Seal 01': item.seal01 || '',
        'Seal 02': item.seal02 || '',
        Description: item.description || '',
        Name: personalInformation.name || '',
        CPF: personalInformation.cpf || '',
        Phone: personalInformation.email || '',
      },
    }))

    try {
      await chunkDispatcher(formattedData, saveBoxes)
      await emails.send({
        personalInformation,
        boxes,
      })
    } catch (error) {
      const responseBody = JSON.stringify({
        status: 'fail',
        ...error,
      })
      return {
        statusCode: 400,
        body: responseBody,
        headers,
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        status: 'ok',
      }),
      headers,
    }
  }

  if (httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers,
    }
  }

  return {
    statusCode: 404,
    body: '{ "status": "not found" }',
    headers,
  }
}

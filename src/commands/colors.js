
'use strict'

const _ = require('lodash')
const config = require('../config')

const msgDefaults = {
  response_type: 'in_channel',
  username: 'Marketing Bot',
  icon_emoji: config('ICON_EMOJI')
}

let attachments = [
  {
      fallback: 'mP Mint',
      title: 'mP Mint',
      color:'#6CFACF',
      text: '#6CFACF'
  },
  {
      fallback: 'mP Mint (for use in text)',
      title: 'mP Mint (for use in text)',
      color:'#2CCB9C',
      text: '#2CCB9C'
  },
  {
      fallback: 'mP Kale',
      title: 'mP Kale',
      color:'#08555C',
      text: '#08555C'
  },
  {
      fallback: 'mP Ruby',
      title: 'mP Ruby',
      color:'#F32153',
      text: '#F32153'
  },
  {
      fallback: 'mP Gold',
      title: 'mP Gold',
      color:'#FFBF00',
      text: '#FFBF00'
  },
  {
      fallback: 'mP Black',
      title: 'mP Black',
      color:'#121212',
      text: '#121212'
  },
  {
      fallback: 'mP Steel (Light Blue Grey)',
      title: 'mP Steel (Light Blue Grey)',
      color:'#959FA6',
      text: '#959FA6'
  },
  {
      fallback: 'mP Steel (Dark Blue Grey)',
      title: 'mP Steel (Dark Blue Grey)',
      color:'#676E73',
      text: '#BDC1C8'
  },
  {
      fallback: 'mP Silver (Light Gray)',
      title: 'mP Silver (Light Gray)',
      color:'#CFCFCF',
      text: '#F1F3F7'
  }
]


const handler = (payload, res) => {
  let msg = _.defaults({
    channel: payload.channel_name,
    attachments: attachments
  }, msgDefaults)

  res.set('content-type', 'application/json')
  res.status(200).json(msg)
  return
}

module.exports = { pattern: /colors/ig, handler: handler }

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
    title: 'This bot will return the latest from the design and marketing teams!',
    color: '#6CFACF',
    text: '`/ask-design colors` Displays the mP brand colors \n`/ask-design logos` Lists a variety of mP logos \n`/ask-design decks` Links to the latest mP master decks \n`/ask-design fonts` Links to .zip folder for Roboto Font \n`/ask-design guidelines` Links to the mP brand guidelines \n`/ask-design suggest` Links to a Google Form to input user suggestions' ,
    mrkdwn_in: ['text']
  },
  {
    title: 'Need a list of commands?',
    color: '#F32153',
    text: '`/ask-design help` ... this will pull up a list of commands! \n',
    mrkdwn_in: ['text']
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

module.exports = { pattern: /help/ig, handler: handler }

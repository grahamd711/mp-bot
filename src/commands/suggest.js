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
      fallback: 'Suggest a feature',
      title: 'Suggest a feature',
      title_link: 'https://goo.gl/forms/KzzrdgK9JCYqzTYy1',
      text: 'Click the link above and suggest something that you’d like the bot to do!'
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

module.exports = { pattern: /suggest/ig, handler: handler }
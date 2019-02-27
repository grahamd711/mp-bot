
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
      fallback: 'Roboto-fonts.zip',
      title: 'Roboto-fonts.zip',
      title_link: 'https://fonts.google.com/download?family=Roboto',
      text: 'To install: Click the link above, unzip the folder, and then drag enclosed font folders to the application “Font Book”'
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

module.exports = { pattern: /fonts/ig, handler: handler }
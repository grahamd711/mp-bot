
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
      fallback: 'Master Google Slide Template',
      author_name: 'Marketing',
      title: 'Master Google Slide Template',
      title_link: 'https://www.mparticle.com/',
      text: 'Use this template to create new Google Slide decks'
  },
  {
      fallback: 'Master Powerpoint Template',
      author_name: 'Marketing',
      title: 'Master Powerpoint Template ',
      title_link: 'https://www.mparticle.com/',
      text: 'Download this template to create new Powerpoint decks'
  },
  {
      fallback: 'Master Presentation Folder',
      author_name: 'Marketing',
      title: 'Master Presentation Folder',
      title_link: 'https://www.mparticle.com/',
      text: 'Links to Google Drive folder with assets, fonts and most up to date templates'
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

module.exports = { pattern: /decks/ig, handler: handler }
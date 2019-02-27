
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
      fallback: 'Download a PDF of the mParticle Brand Guidelines',
      title: 'Brand Guidelines',
      title_link: 'https://company-27420.frontify.com/d/R3WvylCS1wiq/mparticle-brand-assets/#/mparticle-brand-assets/brand-assets/logo-don-ts',
      text: 'Download a PDF of the mParticle Brand Guidelines'
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

module.exports = { pattern: /guidelines/ig, handler: handler }
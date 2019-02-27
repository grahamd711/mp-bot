
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
      fallback: 'PNG',
      title: 'PNG',
      title_link: 'https://company-27420.frontify.com/d/R3WvylCS1wiq/mparticle-brand-assets/#/mparticle-brand-assets/brand-assets',
      text: 'High res black logo on a transparent background'
  },
  {
      fallback: 'JPG',
      title: 'JPG',
      title_link: 'https://company-27420.frontify.com/d/R3WvylCS1wiq/mparticle-brand-assets/#/mparticle-brand-assets/brand-assets',
      text: 'High res black logo on a white background'
  },
  {
      fallback: 'SVG',
      title: 'SVG',
      title_link: 'https://company-27420.frontify.com/d/R3WvylCS1wiq/mparticle-brand-assets/#/mparticle-brand-assets/brand-assets',
      text: 'Vector file, can be scaled to any size.'
  },
  {
      fallback: 'EPS',
      title: 'EPS',
      title_link: 'https://company-27420.frontify.com/d/R3WvylCS1wiq/mparticle-brand-assets/#/mparticle-brand-assets/brand-assets',
      text: 'Vector file, can be scaled to any size.'
  },
  {
      fallback: 'AI',
      title: 'AI',
      title_link: 'https://company-27420.frontify.com/d/R3WvylCS1wiq/mparticle-brand-assets/#/mparticle-brand-assets/brand-assets',
      text: 'Vector file, can be scaled to any size.'
  },
  {
      fallback: 'Master Logo Folder',
      title: 'Master Logo Folder',
      title_link: 'https://company-27420.frontify.com/d/R3WvylCS1wiq/mparticle-brand-assets/#/mparticle-brand-assets/brand-assets',
      text: 'Link to Google Drive folder with all logo formats, colors, file types'
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

module.exports = { pattern: /logos/ig, handler: handler }
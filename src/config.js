
'use strict'

const dotenv = require('dotenv')
const ENV = process.env.NODE_ENV || 'development'

if (ENV === 'development') dotenv.load()

const config = {
  ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  PROXY_URI: process.env.PROXY_URI,
  MPBOT_COMMAND_TOKEN: process.env.MPBOT_COMMAND_TOKEN,
  ICON_EMOJI: ':beers:'
}

module.exports = (key) => {
  if (!key) return config

  return config[key]
}

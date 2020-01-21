const webpack = require('webpack')
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  webpack(config, options) {
    return config
  }
})

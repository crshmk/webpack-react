const path = require('path')
const isDev = require('electron-is-dev')

const devUrl = 'http://localhost:7000'

const prodBuildPath = path.join(__dirname, '../../dist/index.html')

const prodUrl = `file://${prodBuildPath}`

const windowUrl = isDev ? devUrl : prodUrl

module.exports = { windowUrl } 
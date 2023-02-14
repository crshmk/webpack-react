const path = require('path')

const preloadPath = path.join(__dirname, 'preload.js')

const showDevTools = true
const width = showDevTools ? 1200 : 250
const height = showDevTools ? 500 : 350

const config = {
  width,
  height,
  resizable: false,
  frame: false,
  transparent: true,
  show: false,
  webPreferences: {
    nodeIntegration: true,
    preload: preloadPath,
    webSecurity: false
  }
}

module.exports = { config, showDevTools }
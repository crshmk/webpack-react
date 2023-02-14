const path = require('path')

const preloadPath = path.join(__dirname, 'preload.js')

const showDevTools = false
const width = showDevTools ? 1200 : 250
const height = showDevTools ? 500 : 350

const config = {
  width,
  height,
  resizable: false,
  frame: false,
  transparent: true,
  show: true,
  webPreferences: {
    nodeIntegration: true,
    preload: preloadPath
  }
}

module.exports = { config, showDevTools }
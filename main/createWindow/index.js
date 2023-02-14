const { BrowserWindow } = require('electron')

const { config, showDevTools } = require('./config')
const { windowUrl } = require('./windowUrl')

let window = null

const createWindow = () => {
  window = new BrowserWindow(config)
  window.loadURL(windowUrl)

  if (showDevTools) window.webContents.openDevTools()

  window.on('blur', window.hide)

  return window 
}

module.exports = { createWindow }





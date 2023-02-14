const path = require('path')
const { Tray } = require('electron')
const { toggleWindow } = require('./toggleWindow')

const iconPath = path.join(__dirname, './fuelpumpTemplate.png')

const createTray = window => {
  const trayIcon = new Tray(iconPath)
  trayIcon.on('click', toggleWindow(window))
}

module.exports = { createTray }
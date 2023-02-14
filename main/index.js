const { app, BrowserWindow } = require('electron')

const { createTray } = require('./createTray')
const { createWindow } = require('./createWindow')

const { registerIpcEvents } = require('./ipcEvents/registerIpcEvents')

function launchApp() {
  const window = createWindow()
  createTray(window)
  registerIpcEvents(window)
}

app.whenReady().then(launchApp)

app.dock.hide()

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
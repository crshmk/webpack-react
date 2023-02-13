const path = require('path')
const isDev = require('electron-is-dev')
const { app, BrowserWindow } = require('electron')

const windowConfig = {
  width: 800,
  height: 600,
  webPreferences: {
    nodeIntegration: true,
  },
}

const prodBuildPath = path.join(__dirname, '../build/index.html')
const prodUrl = `file://${prodBuildPath}`
const devUrl = 'http://localhost:7000'
const url = isDev ? devUrl : prodUrl

function createWindow() {
  const window = new BrowserWindow(windowConfig)
  window.loadURL(url)

  if (isDev) window.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
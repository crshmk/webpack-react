const path = require('path')
const { exec } = require('child_process')
const isDev = require('electron-is-dev')
const { 
  app, 
  BrowserWindow, 
  ipcMain,
  screen, 
  Tray
} = require('electron')

const iconPath = path.join(__dirname, 'assets/icon.png')

const showDevTools = false
const width = showDevTools ? 1200 : 250
const height = showDevTools ? 500 : 350

const windowConfig = {
  width,
  height,
  resizable: false,
  frame: false,
  transparent: true,
  show: false,
  webPreferences: {
    nodeIntegration: true,
    preload: path.join(__dirname, 'preload.js')
  }
}

const devUrl = 'http://localhost:7000'
const prodBuildPath = path.join(__dirname, '../build/index.html')
const prodUrl = `file://${prodBuildPath}`
const url = isDev ? devUrl : prodUrl

const toggleWindow = window => () => {
  if(window.isVisible()) {
    window.hide()
    return
  }
  const cursorPosition = screen.getCursorScreenPoint()
  window.setPosition(cursorPosition.x - 230,  0)
  window.show()
}

const callBashScript = window => () => {
  const pathToScript = path.join(__dirname, './scripts/test.sh')
  exec(pathToScript, (error, stdout, stderr) => { 
    const err = error?.message || stderr?.message || ''
    const response = stdout || ''
    window.webContents.send('std-err-from-bash-script', err)
    window.webContents.send('std-out-from-bash-script', response)
  })
}

function createWindow() {
  const window = new BrowserWindow(windowConfig)
  window.loadURL(url)

  const trayIcon = new Tray(iconPath)
  trayIcon.on('click', toggleWindow(window))

  if (showDevTools) window.webContents.openDevTools()

  ipcMain.on('to-main', (e, payload) => {
    const response = payload.replace('to', 'from')
    window.webContents.send('from-main', response)
  })

  ipcMain.on('call-bash-script', callBashScript(window))

  window.on('close', () => {
    window = null
  })

  window.on('blur', () => {
    window.hide()
  })
}

app.whenReady().then(createWindow)

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
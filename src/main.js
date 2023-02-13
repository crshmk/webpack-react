const path = require('path')
const isDev = require('electron-is-dev')
const { 
  app, 
  BrowserWindow, 
  screen, 
  Tray
} = require('electron')

const iconPath = path.join(__dirname, 'assets/icon.png')

const windowConfig = {
  width: 250,
  height: 150,
  resizable: false,
  frame: false,
  transparent: true,
  show: false
}

const devUrl = 'http://localhost:7000'
const prodBuildPath = path.join(__dirname, '../build/index.html')
const prodUrl = `file://${prodBuildPath}`
const url = isDev ? devUrl : prodUrl

const onClickTrayIcon = window => () => {
  if(window.isVisible()) {
    window.hide()
    return
  }
  const cursorPosition = screen.getCursorScreenPoint()
  window.setPosition(cursorPosition.x - 230,  0)
  window.show()
}

function createWindow() {
  const window = new BrowserWindow(windowConfig)
  window.loadURL(url)

  const trayIcon = new Tray(iconPath)
  trayIcon.on('click', onClickTrayIcon(window))

  window.on('close', () => {
    window = null;
  })

  window.on('blur', () => {
    window.hide();
  })
}

app.whenReady().then(createWindow)

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
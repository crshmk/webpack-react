const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
  'ipc', 
  {
    send: ipcRenderer.send,
    receive: (channel, cb) => 
      ipcRenderer.on(channel, (e, ...args) => cb(...args))
  }
)
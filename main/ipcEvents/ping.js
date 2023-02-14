const ping = window => (e, payload) => {
  const response = payload.replace('to', 'from')
  window.webContents.send('from-main', response)
}

module.exports = { ping }
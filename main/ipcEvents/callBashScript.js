const path = require('path')
const { exec } = require('child_process')

const pathToScript = path.join(__dirname, './scripts/test.sh')

const callBashScript = window => () => {
  exec(pathToScript, (error, stdout, stderr) => { 
    const err = error?.message || stderr?.message || ''
    const response = stdout || ''
    window.webContents.send('std-err-from-bash-script', err)
    window.webContents.send('std-out-from-bash-script', response)
  })
}

module.exports = { callBashScript }
const { screen } = require('electron')

const toggleWindow = window => () => {
  if(window.isVisible()) {
    window.hide()
    return
  }
  const cursorPosition = screen.getCursorScreenPoint()
  window.setPosition(cursorPosition.x - 230,  0)
  window.show()
}

module.exports = { toggleWindow }
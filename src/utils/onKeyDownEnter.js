// watch for enter key
// onKeyPress={onKeyPressEnter(cb)}
const onKeyDownEnter = cb => e => {
  if(e.which === 13) {
    cb && cb()
  }
}

export default onKeyDownEnter
import React, { useEffect, useState } from 'react'

import chatSocket, {
  connect,
  disconnect,
  emitChatMessage,
  memberConnected,
  updateMessages
} from './chatSocket'

const Chat = () => {
  const [messages, setMessages] = useState([])
  const [isSocketConnected, setIsSocketConnected] = useState(false)
  const [numClients, setNumClients] = useState(0)
  const [message, setMessage] = useState('')

  useEffect(() => {
    chatSocket.connect()

    const onConnect = connect(setIsSocketConnected)
    const onDisconnect = disconnect(setIsSocketConnected)
    const onMemberConnected = memberConnected(setNumClients)
    const onUpdateMessages = updateMessages(setMessages)

    chatSocket.on('connect', onConnect)
    chatSocket.on('disconnect', onDisconnect)
    chatSocket.on('member-connected', onMemberConnected)
    chatSocket.on('update-messages', onUpdateMessages)


    return () => {
      chatSocket.off('connect', onConnect)
      chatSocket.off('disconnect', onDisconnect)
      chatSocket.off('member-connected', onMemberConnected)
      chatSocket.off('update-messages', onUpdateMessages)
      chatSocket.disconnect()
    }
  }, [])

  const onTypeMessage = e => {
    setMessage(e.target.value)
  }

  const onSendMessage = () => {
    emitChatMessage({ message })
    setMessage('')
  }

  return (
    <div className="chat">
      <div className="header">
        <h3>Chat</h3>
        <p>{isSocketConnected ? 'connected' : 'connecting...'}</p>
        <p>Number of chatters: {numClients}</p>
      </div>
      <div>
        <input 
          value={message}
          onChange={onTypeMessage}
        />
      </div>
      <button 
        onClick={onSendMessage} 
        disabled={message === ''}
      >Send</button>
      <div>
        {messages.map(m => <p key={m}>{m}</p>)}
      </div>
    </div>
  )

}

export default Chat
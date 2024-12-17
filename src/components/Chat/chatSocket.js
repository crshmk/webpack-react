import io from 'socket.io-client'
import getUserId from './getUserId'

const namespace = 'chat'
const userId = getUserId()

// undefined aligns the url with the existing server connection 
const url = process.env.NODE_ENV === 'production' ? undefined : `http://localhost:8002/${namespace}?id=${userId}`

const socketConfig = {
  path: '/',
  autoConnect: false
}

const chatSocket = io(url, socketConfig)

export const connect = setIsSocketConnected => () => {
  console.log('chat socket connected', chatSocket.id)
  setIsSocketConnected(true)
}

export const disconnect = setIsConnected => () => {
  console.log('chat socket disconnected', chatSocket.id)
  setIsConnected(false)
}

export const emitChatMessage = ({ userId, message }) => {
  chatSocket.emit('chat-message', { userId, message })
}

export const updateMessages = setChatMessages => ({ messages }) => {
  setChatMessages(messages)
}

export const memberConnected = setNumClients => ({ userId, numClients }) => {
  console.log(userId, 'connected')
  setNumClients(numClients)
}


export default chatSocket
/**
 * substitute for some authentication
 * 
 * this demonstrates the behavior of multiple tabs and multiple browsers 
 */
import { v4 as uuid } from 'uuid'

const getUserId = () => {
  const prevId = localStorage.getItem('userId')
  if(!!prevId && typeof prevId === 'string') return prevId 
  const newId = uuid()
  localStorage.setItem('userId', newId)
  return newId
}

export default getUserId
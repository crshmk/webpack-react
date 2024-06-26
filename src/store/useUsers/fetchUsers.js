import { usersHttp } from '@http'
import { isPresent } from 'ramjam'

const errorMessage = 'Error fetching users'

// (userId: String) => '/' | `/${userId}`
const getRoute = userId => 
    isPresent(userId) ? `/${userId}` : '/'

const fetchUsers = (setUsers, showMessage) => 
  (userId) => {
    const route = getRoute(userId)

    usersHttp.get(route)
      .then(setUsers)
      .catch(() => showMessage('error', errorMessage))
  }

export default fetchUsers
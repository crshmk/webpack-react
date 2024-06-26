import React from 'react'

import './users.css'

import useUsers from '@store/useUsers'

import User from './User'

const makeUsers = users => 
  users.map((user, i) => <User key={i} user={user} />)

const Users = () => {
  const { users } = useUsers()

  const userList = makeUsers(users)

  return (
    <ul>
      {userList}
    </ul>
  )
}

export default Users
import { lazy } from 'react'

const Chat = lazy(() => import('@components/Chat'))
const Home = lazy(() => import('@components/Home'))
const Login = lazy(() => import('@components/Login'))
const Dashboard = lazy(() => import('@components/Dashboard'))
const Users = lazy(() => import('@components/Users'))

import makeRoute from './makeRoute'

export default [
  {
    path: '/',
    Component: Home
  },
  {
    path: '/chat',
    Component: Chat
  },
  {
    path: '/dashboard',
    Component: Dashboard,
    isProtected: true
  },
  {
    path: '/login',
    Component: Login
  },
  {
    path: '/users',
    Component: Users
  }
].map(makeRoute)
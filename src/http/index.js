import makeService from './makeService'

const { isProduction } = process.env 

const site = isProduction
? 'https://domain.com' 
: 'http://localhost:8000'

const usersUrl = 'https://jsonplaceholder.typicode.com/users'

export const usersHttp = makeService(usersUrl)

export const serverHttp = makeService(site)
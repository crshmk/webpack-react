import qs from 'qs'
import makeAxios from './makeAxios'

/**
 * Create an http service for an api
 * @param {String} baseURL 
 * 
 * type RequestMethod = (path: String, payload?: {any}) => Promise
 * @returns { 
 *   get: RequestMethod, 
 *   post: RequestMethod, 
 *   put: RequestMethod, 
 *   delete: RequestMethod 
 * }
 */
const makeService = baseURL => {
  const http = makeAxios(baseURL)

  const get = (route, payload) => {
    const params = qs.stringify(payload)
    return http.get(`${route}?${params}`)
  }

  return {
    get, 
    post: http.post, 
    put: http.put, 
    delete: http.delete
  }
}

export default makeService
  
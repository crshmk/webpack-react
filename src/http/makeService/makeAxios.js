import axios from 'axios'
import { propOr } from 'ramda'

const returnFetchedData = propOr({}, 'data')

function rejectErrors(res) {
  return Promise.reject(res)
} 

/**
 * @param {String} baseURL 
 * @returns {AxiosInstance}
 */
const makeAxios = baseURL => {
  const http = axios.create({
    baseURL,
    withCredentials: true,
    // treat 400s as a failure 
    validateStatus: function (status) {
      return status >= 200 && status < 300
    }
  })

  http.interceptors.response.use(
    returnFetchedData, 
    rejectErrors
  )

  return http
}

export default makeAxios
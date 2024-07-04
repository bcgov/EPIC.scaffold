import axios from 'axios'

const client = axios.create({ baseURL: 'http://localhost:5175' })

export const request = ({ ...options }) => {
  // client.defaults.headers.common.Authorization = `Bearer token`

  const onSuccess = (response: unknown) => response
  const onError = (error: unknown) => {
    // optionaly catch errors and add additional logging here
    return error
  }

  return client(options).then(onSuccess).catch(onError)
}

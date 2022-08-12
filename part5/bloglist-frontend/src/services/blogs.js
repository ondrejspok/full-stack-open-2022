import axios from 'axios'
const baseUrl = 'api/blogs'
const loginUrl = 'api/login'

export const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export const getLoginToken = async (username, password) => {
    try {
      const response = await axios.post(loginUrl, {username, password})
      return response.data
    } catch(err) {
      return err.response.data
    }
}
import axios from 'axios'
const baseUrl = 'api/blogs'
const loginUrl = 'api/login'

export const getLoginToken = async (username, password) => {
    try {
      const response = await axios.post(loginUrl, {username, password})
      return response.data
    } catch(err) {
      return err.response.data
    }
}

export const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export const createBlog = async (token, blog) => {
  const config = {
    headers: {
      Authorization: `bearer ${token}`
    }
  }
  const response = await axios.post(baseUrl, blog, config)
  return response.data
}
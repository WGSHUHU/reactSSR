import axios from 'axios'

const createInstance = req => {
  return axios.create({
    baseURL: 'https://cnodejs.org'
  })
}

export default createInstance

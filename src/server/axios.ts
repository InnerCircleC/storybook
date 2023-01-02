import axios from 'axios'

const config = {
  baseURL: process.env.REACT_APP_BASE_URL,
}

const Axios = axios.create(config)

export default Axios

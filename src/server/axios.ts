import axios from 'axios'

const config = {
  baseURL: 'http://localhost:6006',
}

const Axios = axios.create(config)

export default Axios

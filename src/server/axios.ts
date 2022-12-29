/* eslint-disable no-duplicate-imports */

import type { AxiosError } from 'axios'
import axios from 'axios'

const config = {
  baseURL: 'localhost:6006',
}

const Axios = axios.create(config)

Axios.interceptors.response.use(
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  res => res.data,
  (err: AxiosError) => Promise.reject(err),
)

export default Axios

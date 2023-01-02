import Axios from '../axios'
import type ButtonType from '../../types/button'

export const getButtonStyle = async () => {
  const result = await Axios.get<ButtonType.Data>('/style.json')
  return result.data
}

export default { getButtonStyle }

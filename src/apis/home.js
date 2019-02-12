import {clientInstance} from './request'

export const homeWeather = () => {
  return clientInstance.get('/api/test')
}
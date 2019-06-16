import axios, { AxiosInstance } from 'axios'
import  getPlatFormPrefix  from './config/index'

const service: AxiosInstance = axios.create({
  baseURL: getPlatFormPrefix('saas'),
  timeout: 30000 // 请求超时时间                                   
})


// 添加request拦截器 
service.interceptors.request.use(
  config => {
  return config
}, error => {
  Promise.reject(error)
})

// 添加respone拦截器
service.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error.response)
  }
)

export default service
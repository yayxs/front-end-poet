import MinRequest from './minRequest' // 引入文件
const minRequest = new MinRequest() // 实例化
// 请求拦截器
minRequest.interceptors.request((request) => {
  return request
})

// 响应拦截器
minRequest.interceptors.response((response) => {
  return response.data
})

// 设置默认配置
minRequest.setConfig((config) => {
  config.baseURL = 'http://rap2api.taobao.org/app/mock/243623'
  return config
})

export default {
  // 这里统一管理api请求
  apis: {
    uniapp (data) {
      return minRequest.post('/api/v1/list', data)
    }
  }
}
import axios from 'axios'

const host = {
  api: '',
  static: ''
}

export function request (url, method, data, headers) {
  return new Promise((resolve, reject) => {
    axios({
      method,
      baseURL: host.api,
      url,
      data,
      headers
    }).then(resp => {
      // todo 返回信息过滤
      resolve(resp)
    }).catch(err => reject(err))
  })
}

export function getHost () {
  return host
}

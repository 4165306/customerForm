import { request } from '../baseRequest'

const url = {
  getFields: '/form/fields/get',
  selectData: '/form/select/get'
}
export function getFields () {
  return request(url.getFields, 'get', {}, {})
}

export function getSelectData () {
  return request(url.selectData, 'get', {}, {})
}

import LocalJson from './LocalComponentsJson.json'
const Mock = require('mockjs')
const FieldsData = () => {
  return LocalJson
}
const selectData = [{ value: '1' }, { value: 2 }]

Mock.mock('/form/fields/get', 'get', FieldsData)
Mock.mock('/form/select/get', 'get', selectData)

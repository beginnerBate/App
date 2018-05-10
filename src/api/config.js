import axios from 'axios'

function getUrl (){
  return axios.get('static/config.json').then((res)=>{
    return Promise.resolve(res.data.port)
  })
} 

const Axios = axios.create({
  headers:{
    inpatientAreaCode:'001'
  }
})

function param(data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  return url ? url.substring(1) : ''
}

export {
  getUrl,
  Axios,
  param
}
// import axios from 'axios'
import {Axios, param, getUrl} from './config'
export function getTemp (data) {
  return getUrl().then((BASEURL)=>{
    let url = BASEURL + 'newestTemperatures'
    url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
    return Axios.get(url).then((res) => {
      return Promise.resolve(res.data)
    },(err)=>{
      return Promise.reject(err)
    })
  })
}

export function getTempByBed (data) {
  return getUrl().then((BASEURL)=>{
    let url = BASEURL+'temperatures'
    url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
    return Axios.get(url).then((res) => {
      return Promise.resolve(res.data)
    },(err)=>{
      return Promise.reject(err)
    })
  })
}
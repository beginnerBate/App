import {Axios,param,getUrl} from './config'
export function getTrans (data) {
  return getUrl().then((BASEURL)=>{
    let url = BASEURL + 'infusionMonitors'
    url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
    return Axios.get(url).then((res) => {
      // return Promise.resolve(res.data)
      return new Promise ((resolve,reject)=>{
            resolve(res.data)
            reject(res.error)
      })
    })
  })
}

// 删除警报
export function delAlarm (infusionMonitorId) {
  return getUrl().then((BASEURL)=>{
    let url = BASEURL + `infusionMonitors/${infusionMonitorId}/status/-1`
    return Axios.patch(url).then((res)=>{
      return Promise.resolve(res.data)
    },(err)=>{
      return Promise.reject(err)
    })    
  })
}
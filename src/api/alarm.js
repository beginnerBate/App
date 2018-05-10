import {Axios,getUrl} from './config'

export function alarm () {
  return getUrl().then((BASEURL)=>{
    let url = BASEURL + 'infusionAlarms?status=0'
    return Axios.get(url).then((res)=>{
      return Promise.resolve(res.data)
    },(err)=>{
      return Promise.reject(err)
    })
  })
}

// 删除警报
export function delAlarm (infusionAlarmId) {
  return getUrl().then((BASEURL)=>{
    let url = BASEURL + `infusionAlarms/${infusionAlarmId}/status/-1`
    return Axios.patch(url).then((res)=>{
      return Promise.resolve(res.data)
    },(err)=>{
      return Promise.reject(err)
    })    
  })
}
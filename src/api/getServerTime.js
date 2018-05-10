import axios from 'axios'
import {getUrl} from './config'
export function getServerTime () {
  return getUrl().then((BASEURL)=>{
    // let mydata = new Date()
    let url = BASEURL + `common/sysDateTime?t=${Date.now()}`
    return axios.get(url).then((res) => {
      return Promise.resolve(res.data)
    })
  })
}
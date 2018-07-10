import { commonParams, options } from './config'
import axios from 'axios'

export function getLyric(mid) {
  const url = '/api/lyric'

  const data = Object.assign({}, commonParams, {
    songmid: mid,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    categoryId: 10000000,
    pcachetime: +new Date(),
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getMusicUrl(musicData) {
  const url = '/api/getMusicUrl'
  const data = Object.assign({}, commonParams, {
    loginUin: 0,
    hostUin: 0,
    format: "json",
    inCharset: "utf-8",
    outCharset: "utf-8",
    notice: 0,
    platform: "yqq",
    needNewCode: 0,
    cid: 205361747,
    uin: 0,
    songmid: musicData.mid,
    filename: `C400${musicData.mid}.m4a`,
    guid: 3360709558
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve({
      cid: res.data.cid,
      code: res.data.code,
      userip: res.data.userip,
      data: {
        musicUrl: `http://dl.stream.qqmusic.qq.com/${res.data.data.items[0].filename}?vkey=${res.data.data.items[0].vkey}&guid=3360709558&uin=0&fromtag=66`
      }
    })
  })
}
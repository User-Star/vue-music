import { commonParams, options } from './config'
import axios from 'axios'

export function getLyric(mid) {
  const url = '/api/lyric'

  const data = Object.assign({}, commonParams, {
    songmid: mid,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
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
    guid: 4947008496
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve({
      cid: res.data.cid,
      code: res.data.code,
      userip: res.data.userip,
      data: {
        musicUrl: `http://dl.stream.qqmusic.qq.com/${res.data.data.items[0].filename}?vkey=${res.data.data.items[0].vkey}&guid=4947008496&uin=3248&fromtag=38`
      }
    })
  })
}

//https://u.y.qq.com/cgi-bin/musicu.fcg?_=1532071766284

//http://dl.stream.qqmusic.qq.com/C400103r8zKA1NRSNz.m4a?guid=4947008496&vkey=2921228B004A03FED187F729B389684B1769A2033E08492C3F05F12484A949216A6E294C3C1366528701DEC7DC2E80AD7141899AE2A7A087&uin=3248&fromtag=38

//http://dl.stream.qqmusic.qq.com/C400003r8zKA1NRSNz.m4a?vkey=4BBC07CE592AA230B0CD45D75871074D25987DFFDBB4315B26BCBC5356386FE96405EEDF7B015DDF716EBF7A31F33A2C7B06A42E8360009A&guid=4947008496&uin=0&fromtag=38
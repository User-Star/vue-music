import { getLyric } from 'api/song'
import { ERR_OK } from 'api/config'
import { Base64 } from 'js-base64'

export default class Song {
  constructor({ id, mid, singer, name, album, duration, image, url }) {
    this.id = id
    this.mid = mid
    this.singer = singer
    this.name = name
    this.album = album
    this.duration = duration
    this.image = image
    this.url = url
  }
  getLyric() {
    if (this.lyric) {
      return Promise.resolve(this.lyric)
    }
    return new Promise((resolve, reject) => {
      getLyric(this.mid).then((res) => {
        if (res.retcode === ERR_OK) {
          this.lyric = Base64.decode(res.lyric)
          resolve(this.lyric)
        } else {
          reject('no lyric')
        }
      })
    })
  }
}

export function createSong(musicData) {
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    url: ``
  })
}
//https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg
// jsonpCallback: MusicJsonCallback5206224993746316
// loginUin: 0
// hostUin: 0
// format: json
// inCharset: utf8
// outCharset: utf-8
// notice: 0
// platform: yqq
// needNewCode: 0
// cid: 205361747
// callback: MusicJsonCallback5206224993746316
// uin: 0
// songmid: 0039MnYb0qxYhV --musicData.songmid
// filename: C4000039MnYb0qxYhV.m4a---C400${musicData.songmid}.m4a
// guid: 3360709558

// {
// 	"code": 0,
// 	"cid": 205361747,
// 	"userip": "111.198.176.234",
// 	"data": {
// 		"expiration": 80400,
// 		"items": [{
// 			"subcode": 0,
// 			"songmid": "0039MnYb0qxYhV",
// 			"filename": "C4000039MnYb0qxYhV.m4a",
// 			"vkey": "2D4627C04AE8C96738F58BB1415799F753E34844693839D25A4CC9EA86DC3762F0E61B3A8F257F83485BB58554100818918160C3AAF353ED"
// 		}]
// 	}
// }

function filterSinger(singer) {
  let ret = [];
  if (!singer) return ''
  singer.forEach((s) => {
    ret.push(s.name)
  });
  return ret.join('/')
}
import {getLyric} from 'api/song'
import {ERR_OK} from 'api/config'
import {Base64} from 'js-base64'

export default class Song {
  constructor({id, mid, singer, name, album, duration, image, url}) {
    this.id = id
    this.mid = mid
    this.singer = singer
    this.name = name
    this.album = album
    this.duration = duration
    this.image = image
    this.url = url
  }
}

export function createSong(musicData){
  return new Song({
    id:musicData.songid,
    mid:musicData.songmid,
    singer:filterSinger(musicData.singer),
    name:musicData.songname,
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

//http://dl.stream.qqmusic.qq.com/C400000QCwge3B6Ad1.m4a?vkey=14D1E3ACFF6FBE09C6AA9403F0D135F4F2879CD24066AF3CE1C541B803BD7BAEEA83F6A575ECC29D1CE8067D0F77CFECDFBC8049C0F535F8&guid=3360709558&uin=0&fromtag=66

//http://dl.stream.qqmusic.qq.com/C400000fcbn33tw0lQ.m4a?vkey=EAFD46AB840927616142F7FA7E852772B78A31CD047C4397869549B62BC0F81FB95AA42303D7A71BE7C226D80C78297202267C0F8D641947&guid=3360709558&uin=0&fromtag=66

//http://dl.stream.qqmusic.qq.com/C400000fcbn33tw0lQ.m4a?vkey=DC9B7DEB22C1C42BDAEC45D0E69F672E9E520D54E81BA4B300418957EC6B86B3916902C82B6AA5210D7264C85891F711987DABF0C0F6C6A7&guid=3360709558&uin=736169136&fromtag=66
function filterSinger(singer){
  let ret=[];
  if(!singer)return''
  singer.forEach((s)=>{
    ret.push(s.name)
  });
  return ret.join('/')
}
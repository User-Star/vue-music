import jsonp from 'common/js/jsonp'
import axios from 'axios'
import { commonParams, options } from './config'

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platfrom: 'h5',
    uin: 0,
    needNewCode: 1
  })
  return jsonp(url, data, options)
  // return axios.get(url,{
  //   params:data
  // }).then((res)=>{
  //   console.log(res)
  //   return Promise.resolve(res.data);
  // });
}
export function getDiscList() {
  const url = 'api/getDiscList';
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data);
  });
}


// export function getMusicList(){
//   const url='https://u.y.qq.com/cgi-bin/musicu.fcg';
//   const data=Object.assign({},commonParams,{
//     g_tk:1481171040,
//     platfrom:'h5',
//     needNewCode:0,
//     callback:'__jp0',
//     data:`%7B"comm"%3A%7B"ct"%3A24%7D%2C"category"%3A%7B"method"%3A"get_hot_category"%2C"param"%3A%7B"qq"%3A""%7D%2C"module"%3A"music.web_category_svr"%7D%2C"recomPlaylist"%3A%7B"method"%3A"get_hot_recommend"%2C"param"%3A%7B"async"%3A1%2C"cmd"%3A2%7D%2C"module"%3A"playlist.HotRecommendServer"%7D%2C"playlist"%3A%7B"method"%3A"get_playlist_by_category"%2C"param"%3A%7B"id"%3A8%2C"curPage"%3A1%2C"size"%3A40%2C"order"%3A5%2C"titleid"%3A8%7D%2C"module"%3A"playlist.PlayListPlazaServer"%7D%2C"new_song"%3A%7B"module"%3A"QQMusic.MusichallServer"%2C"method"%3A"GetNewSong"%2C"param"%3A%7B"type"%3A0%7D%7D%2C"new_album"%3A%7B"module"%3A"music.web_album_library"%2C"method"%3A"get_album_by_tags"%2C"param"%3A%7B"area"%3A7%2C"company"%3A-1%2C"genre"%3A-1%2C"type"%3A-1%2C"year"%3A-1%2C"sort"%3A2%2C"get_tags"%3A1%2C"sin"%3A0%2C"num"%3A40%2C"click_albumid"%3A0%7D%7D%2C"toplist"%3A%7B"module"%3A"music.web_toplist_svr"%2C"method"%3A"get_toplist_index"%2C"param"%3A%7B%7D%7D%2C"focus"%3A%7B"module"%3A"QQMusic.MusichallServer"%2C"method"%3A"GetFocus"%2C"param"%3A%7B%7D%7D%7D`
//   })
//   return jsonp(url,data,options)
// }


// url
// //https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg?type=1&json=1&utf8=1&onlysong=0&disstid=4212590712&format=jsonp&g_tk=5381&jsonpCallback=playlistinfoCallback&loginUin=736169136&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0
export function getSongList(disstid) {
  const url = 'api/getSongList';
  const data = Object.assign({}, commonParams, {
    disstid: disstid,
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    loginUin: 0,
    hostUin: 0,
    format: "json",
    inCharset: "utf8",
    outCharset: "utf-8",
    notice: 0,
    platform: "yqq",
    needNewCode: 0
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data);
  });
}
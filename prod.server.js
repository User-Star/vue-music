var express = require('express')
var config = require('./config/index')
var axios = require('axios')

const app = express()//请求server

const apiRoutes = express.Router()
app.use('/api', apiRoutes)//通过路由请求数据

app.get('/api/getDiscList', function (req, res) {
    var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
    axios.get(url, {
        headers: {
            referer: 'https://c.y.qq.com/',
            host: 'c.y.qq.com'
        },
        params: req.query
    }).then((response) => {
        //console.log(response.data)
        res.json(response.data)
    }).catch((e) => {
        console.log("time out")
    })
});
app.get('/api/getMusicUrl', function (req, res) {
    var url = 'https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg'
    axios.get(url, {
        headers: {
            referer: 'https://y.qq.com/portal/player.html',
            host: 'c.y.qq.com'
        },
        params: req.query
    }).then((response) => {
        //console.log(response.data)
        res.json(response.data)
    }).catch((e) => {
        console.log("time out")
    })
});
app.get('/api/lyric', function (req, res) {
    var url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg'

    axios.get(url, {
        headers: {
            referer: 'https://c.y.qq.com/portal/player.html',
            host: 'c.y.qq.com'
        },
        params: req.query
    }).then((response) => {
        var ret = response.data
        if (typeof ret === 'string') {
            var matches = ret.replace(/[_$\w\d]{0,}\(/, "").replace(/\)$/, "");
            if (matches) {
                ret = JSON.parse(matches)
            }
        }
        res.json(ret)
    }).catch((e) => {
        console.log("time out")
    })
});
app.get('/api/getSongList', (req, res) => {
    var url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'
    axios.get(url, {
        headers: {
            referer: 'https://y.qq.com/portal/player.html',
            host: 'c.y.qq.com'
        },
        params: req.query
    }).then((response) => {
        res.json(response.data)
    }).catch((e) => {
        console.log("time out")
    })
});
app.get('/api/search', (req, res) => {
    var url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp'
    axios.get(url, {
        headers: {
            referer: 'https://y.qq.com/portal/player.html',
            host: 'c.y.qq.com'
        },
        params: req.query
    }).then((response) => {
        var ret = response.data

        if (typeof ret === 'string') {
            var matches = ret.replace(/[_$\w\d]{0,}\(/, "").replace(/\)$/, "");
            if (matches) {
                ret = JSON.parse(matches)
            }
        }
        res.json(ret)
    }).catch((e) => {
        console.log("time out")
    })
})

app.use(express.static('./dist'))

var port = process.env.PORT || config.build.port

module.exports = app.listen(port, function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('Listening at http://localhost:' + port + '\n')
})

var fs = require("fs");
//console.log(fs)
fs.readFile('index.html','utf-8', function (err, data) {
    if (err) {
        console.error(err);
    }
    console.log("异步读取: " + data.toString());
 });
// console.log("同步读取: " + data.toString());

console.log("程序执行完毕。");
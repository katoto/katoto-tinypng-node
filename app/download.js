/**
 * 
 */

var path = require("path");
var request = require('request')
var fs = require('fs')

var download = function (param) {
    // 下载的图片路径
    var writeStream = fs.createWriteStream(param["newsrc"]);
    var readStream = request(param["url"])
    readStream.pipe(writeStream);
    readStream.on('end', function() {
        console.log('文件下载成功');
    });
    readStream.on('error', function(err) {
        console.log("错误信息:" + err)
        param["error"](err);
    })
    writeStream.on("finish", function(result) {
        console.log("文件写入成功");
        writeStream.end();
        param["callback"](result);
    });
};

module.exports = function (param) {
    param && download(param);
};


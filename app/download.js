/**
 * Created by fengqiaogang on 15/4/4.
 */

var path = require("path");
var child_process = require('child_process');

var download = function (param) {
    var exec = child_process.exec;
    var binaryEncoding = 'binary'
    var iconv = require('iconv-lite');
    var encoding = 'cp936'
    var cmd = 'wget -d "' + param["url"] + '" -O ' + param["newsrc"] ;
    // 首先保证cmd 下支持wget 命令
    var free = exec(cmd , { encoding: binaryEncoding },function (error, stdout, stderr) {
        console.log(error)
        console.log('========err=')
        console.log(iconv.decode(new Buffer(stdout, binaryEncoding), encoding), iconv.decode(new Buffer(stderr, binaryEncoding), encoding));
        if (error) {
            param["error"](error);
        } else {
            param["callback"](result);
        }
    });
    
    free.stderr.on('data', function (info) {
        console.log(info)
        console.log("Download : ", info);
    });
    free.on('exit', function (code, signal) {
    });
};

module.exports = function (param) {
    param && download(param);
};


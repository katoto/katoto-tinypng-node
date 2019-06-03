# tinypng
使用 tinypng 提供的 API 利用 Node.js 进行本地批量压缩图片

需要到 https://tinypng.com/developers 申请密匙

将申请的密匙填写到 tinypng/config/key.js 中

然后就可以使用 node tinypng.js path true/false [true 覆盖原图，false 将保留原图创建一张 .min 的图片]

## 利用熊猫压缩进行自动图片压缩
1、自动读取src 目录下的文件
2、如果设置为false 将新建一个目录src_min 存压缩后的图片，否则覆盖原图


## 缺点
+ 官方提供的api 没有直接网页压缩来的效率高。
+ 压缩过程中，上传会出现中断

## 结论
弃疗。。。

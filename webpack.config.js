var getConfig = require('hjs-webpack')


module.exports = getConfig({
  //入口js文件的位置
  in: 'src/app.js',

  //应用打包(bulid)之后将存放在哪个文件夹
  out: 'public',

  hostname: '192.168.99.100',
  port: '80',

  //是否在每次打包之前将之前的打包文件删除
  clearBeforeBuild: true
  
})

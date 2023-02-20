const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
   // 解决不引用就会报错
   lintOnSave: false,
   publicPath: "./",
  //  解决跨域问题
   devServer: {
    proxy: 'https://api.bmobcloud.com/1/classes/blogs/'   
  }
})

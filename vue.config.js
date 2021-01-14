module.exports = {
  devServer: {
    open: false, //设置自动打开
    port: 9000, //设置端口
    proxy: {
      //设置代理
      "/": {
        target: "http://api.vikingship.xyz/api",
        changeOrigin: true,
        secure: false //如果是http接口，需要配置该参数
      }
    }
  }
};

const path = require("path");
module.exports = {
  configureWebpack: {
//    publicPath: process.env.NODE_ENV === "production" ? "/regionalshopping/" : "/", 
    resolve: {
      alias: {
        "@layouts": path.resolve(__dirname, "src/layouts"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@components": path.resolve(__dirname, "src/components"),
      }
    }
  }
}

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})


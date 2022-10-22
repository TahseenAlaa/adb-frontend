const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/portal/',
  transpileDependencies: [
    'vuetify'
  ]
})

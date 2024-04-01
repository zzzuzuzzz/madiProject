const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    pwa: {
        name: "Расписание МАДИ",
        themeColor: "#1071B5"
    }
})
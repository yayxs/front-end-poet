import Vue from 'vue'
import App from './App'
import './common/iconfont.css' // 引入阿里图标库
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

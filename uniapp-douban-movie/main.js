import Vue from 'vue'
import App from './App'
import MinRequest from './common/api/minRequest.js'
import minRequest from './common/api/api.js'
import './common/iconfont.css' // 引入阿里图标库

import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
Vue.component('mescroll-body', MescrollBody)
Vue.component('mescroll-uni', MescrollUni)
Vue.config.productionTip = false
Vue.use(MinRequest)
App.mpType = 'app'

const app = new Vue({
	...App,
	minRequest
})
app.$mount()

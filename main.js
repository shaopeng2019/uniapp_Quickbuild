import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
import api from '@/api/index'
import {publicMixin} from '@/mixin/public.js'
// 公共混入
Vue.mixin(publicMixin)

Vue.use(uView);
uni.$u.config.unit = 'rpx';

Vue.config.productionTip = false
Vue.prototype.$api = api

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()

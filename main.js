import Vue from 'vue'
import App from './app.vue'
import './main.css'
import 'mint-ui/lib/style.css'
import './dist/mui/css/mui.min.css'
import './dist/mui/js/mui.min.js'
import './dist/mui/css/icons-extra.css'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import router from './router.js'
//Mint-UI:按需引入
import { Header, Swipe, SwipeItem, Button } from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.http.options.root = 'http://localhost:9090' //设置VueRource的全局请求路径
Vue.http.options.xhr = { withCredentials: true }//可跨域
Vue.http.options.emulateJSON = true;//全局配置
new Vue({
	el: '#app',
	render: f => f(App),
	router,
})
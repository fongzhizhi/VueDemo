import Vue from 'vue'
import App from './app.vue'
import './main.css'
import 'mint-ui/lib/style.css'
import './dist/mui/css/mui.min.css'
import './dist/mui/css/icons-extra.css'
import VueRouter from 'vue-router';
import router from './router.js'
//Mint-UI:按需引入
import { Header, Swipe, SwipeItem } from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.use(VueRouter)

new Vue({
	el: '#app',
	render: f => f(App),
	router,
})
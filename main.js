import Vue from 'vue'
import App from './app.vue'
//完整引入Mint-UI提供的组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './dist/mui/css/mui.min.css'

Vue.use(MintUI)

new Vue({
	el: '#app',
	render: f => f(App)
})
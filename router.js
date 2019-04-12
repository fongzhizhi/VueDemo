import VueRouter from 'vue-router';

//1、视图组件
import home from './components/tabbar/home.vue';
import member from './components/tabbar/member.vue';
import cart from './components/tabbar/cart.vue';
import search from './components/tabbar/search.vue';
//2、路由规则
var routes = [
	{path: '/', redirect: '/home'},
	{path: '/home', component: home},
	{path: '/member', component: member},
	{path: '/cart', component: cart},
	{path: '/search', component: search}
];
//3、路由实例
var router  = new VueRouter({
	routes,
	linkActiveClass: 'mui-active',
});

//4、导出
export default router;
export {VueRouter};
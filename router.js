import VueRouter from 'vue-router';

//1、视图组件
import home from './src/home.vue';
import about from './src/about.vue';
//2、路由规则
var routes = [
	{path: '/home', component: home},
	{path: '/about', component: about}
];
//3、路由实例
var router  = new VueRouter({
	routes
});

//4、导出
export default router;
export {VueRouter};
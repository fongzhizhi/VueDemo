<template>
	<div>
		<!--顶部标题栏-->
		<div class="header">
			<mt-header fixed title="Vue-Demo"></mt-header>
		</div>

		<!--中间内容区-->
		<div class="container">
			<transition mode="out-in">
				<router-view></router-view>
			</transition>
		</div>
		
		<!--底部按钮-->
		<div class="tabbar">
			<nav class="mui-bar mui-bar-tab">
				<router-link class="mui-tab-item2" to="/home">
					<span class="mui-icon mui-icon-home"></span>
					<span class="mui-tab-label">Home</span>
				</router-link>
				<router-link class="mui-tab-item2" to="/member">
					<span class="mui-icon mui-icon-contact"></span>
					<span class="mui-tab-label">Member</span>
				</router-link>
				<router-link class="mui-tab-item2" to="/cart">
					<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
					<span class="mui-tab-label">Cart</span>
				</router-link>
				<router-link class="mui-tab-item2" to="/search">
					<span class="mui-icon mui-icon-search"></span>
					<span class="mui-tab-label">Searth</span>
				</router-link>
			</nav>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header{
	margin-bottom: 40px;
}
.tabbar{
	margin-top: 50px;
}
.v-enter {
  opacity: 0;
	transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
	transform: translateX(-100%);
}
.v-enter-active, .v-leave-active{
	transition: all 0.4s ease;
}
.container{
	overflow-x: hidden;
}
/*解决导入mui.js之后点击报错的问题：将默认的类名mui-tab-item变化即可**/
.mui-bar-tab .mui-tab-item2.mui-active {
    color: #007aff;
}

.mui-bar-tab .mui-tab-item2 {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item2 .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item2 .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>

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
				<router-link class="mui-tab-item" to="/home">
					<span class="mui-icon mui-icon-home"></span>
					<span class="mui-tab-label">Home</span>
				</router-link>
				<router-link class="mui-tab-item" to="/member">
					<span class="mui-icon mui-icon-contact"></span>
					<span class="mui-tab-label">Member</span>
				</router-link>
				<router-link class="mui-tab-item" to="/cart">
					<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
					<span class="mui-tab-label">Cart</span>
				</router-link>
				<router-link class="mui-tab-item" to="/search">
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
</style>

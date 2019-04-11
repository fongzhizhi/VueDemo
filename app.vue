<template>
	<div>
		<!--顶部标题栏-->
		<div class="header">
			<mt-header fixed title="固定在顶部"></mt-header>
		</div>

		<!--中间内容区-->
		<div class="container">
			container
		</div>
		
		<!--底部按钮-->
		<div class="tabbar">
			<nav class="mui-bar mui-bar-tab">
				<a class="mui-tab-item mui-active" href="#tabbar">
					<span class="mui-icon mui-icon-home"></span>
					<span class="mui-tab-label">首页</span>
				</a>
				<a class="mui-tab-item" href="#tabbar-with-chat">
					<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
					<span class="mui-tab-label">消息</span>
				</a>
				<a class="mui-tab-item" href="#tabbar-with-contact">
					<span class="mui-icon mui-icon-contact"></span>
					<span class="mui-tab-label">通讯录</span>
				</a>
				<a class="mui-tab-item" href="#tabbar-with-map">
					<span class="mui-icon mui-icon-gear"></span>
					<span class="mui-tab-label">设置</span>
				</a>
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
	margin-top: 40px;
}
</style>

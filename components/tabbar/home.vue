<template>
	<div>
		<!--轮播图-->
		<mt-swipe :auto="3000">
			<mt-swipe-item v-for="iurl in ids">
				<img :src="iurl" />
			</mt-swipe-item>
		</mt-swipe>
		<!--九宫格（栅格）-->
		<ul class="mui-table-view mui-grid-view mui-grid-9">
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
				<router-link to="/home/news">
					<span class="mui-icon mui-icon-extra mui-icon-extra-new"></span>
					<div class="mui-media-body">News</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
				<router-link to="/home/shareimage">
					<span class="mui-icon mui-icon-image"></span>
					<div class="mui-media-body">Pictures Sharing</div>
				</router-link></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
				<a href="#">
					<span class="mui-icon mui-icon-extra mui-icon-extra-gift"></span>
					<div class="mui-media-body">Shoping</div>
				</a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
				<a href="#">
					<span class="mui-icon mui-icon-email"><span class="mui-badge">2</span></span>
					<div class="mui-media-body">Feedback</div>
				</a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
				<a href="#">
					<span class="mui-icon mui-icon-videocam"></span>
					<div class="mui-media-body">Video Zone</div>
				</a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
				<a href="#">
					<span class="mui-icon mui-icon-phone"></span>
					<div class="mui-media-body">Contact Us</div>
				</a></li>
		</ul>
	</div>
</template>

<script>
	import {Toast} from 'mint-ui'
	export default {
		data: () => {
			return {
				ids: []
			}
		},
		methods:{
			getIds(){
				this.$http.get('getIds/').then(result => {
					this.ids = result.body.ids;
				}, result => {
					this.show('轮播图加载失败');
				});
			},
			show(message, time){
				Toast({
					message,
					duration: time || 1000
				});
			}
		},
		created() {
			this.getIds();
		}
	}
</script>

<style scoped>
	.mint-swipe {
		height: 600px;
	}
	
	.mint-swipe-items-wrap img {
		height: 100%;
		width: 100%;
		border-image-repeat: repeat;
	}

	.mint-swipe-item {
		text-align: center;
	}

	.mui-table-view.mui-grid-view .mui-table-view-cell{
		font-size: 60px;
	}
	
	.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
		font-size: 38px;
		line-height: 50px;
		height: 65px;
	}

	span.mui-icon-extra-new {
		color: #6cde60;
	}

	span.mui-icon-image {
		color: #03a9f4;
	}

	span.mui-icon-extra-gift {
		color: #7139ad;
	}

	span.mui-icon-email {
		color: #132eff;
	}

	span.mui-icon-videocam {
		color: #607d8b;
	}

	span.mui-icon-phone {
		color: #f44336;
	}
</style>

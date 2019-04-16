<template>
	<ul class="mui-table-view">
		<li class="mui-table-view-cell mui-media" v-for="list in newsList" :key="list.id">
			<router-link :to="'/home/newsInfo/' + list.id" :createtTime="list.createTime" :views="list.views">
				<img class="mui-media-object mui-pull-left" :src="list.imageUrl">
				<div class="mui-media-body">
					<h4> {{list.title}} </h4>
					<p class="Introduction">
						{{list.introduction}}
					</p>
					<p class='mui-ellipsis'>
						<span>发表时间：{{list.createTime}}</span>
						<span>浏览量：{{list.views}}</span>
					</p>
				</div>
			</router-link>
		</li>
	</ul>
</template>

<script>
	import {Toast} from 'mint-ui'
	export default {
		data: () => {
			return {
				newsList: []
			}
		},
		methods: {
			getNewsList(){
				this.$http.get('getNewsList/').then( result => {
					this.newsList = result.body.newsLlist;
					this.show('新闻列表加载成功');
				}, result => {
					this.show('新闻列表加载失败');
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
			this.getNewsList();
		}
	}
</script>

<style scoped>
	.mui-ellipsis{
		color: #03A9F4;
		display: flex;
		justify-content: space-between;
	}
	.Introduction{
		color: #607D8B;
	}
</style>

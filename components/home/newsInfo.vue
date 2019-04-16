<template>
	<div class="newsInfo">
		<h3 class="title"> {{newsInfo.title}} </h3>
		<p class="subtitle">
			<span>发表时间：{{newsInfo.createTime}}</span>
			<span>浏览量：{{newsInfo.views}}</span>
		</p>
		<hr />
		<div class="content" v-html="newsInfoHtml">
			fsafs
			fasfdsdafsadf
			sadf
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				id: this.$route.params.id,
				newsInfoHtml: 'sdfas',
				newsInfo: {},
			}
		},
		methods:{
			getNewsInfo(){
				this.$http.get('getNewsInfo?id='+this.id).then(result => {
					this.newsInfoHtml = result.body.html;
					this.newsInfo = result.body.list;
				}, result => {
					
				});
			}
		},
		created(){
			this.getNewsInfo();
		}
	}
</script>

<style lang="scss">
	.newsInfo{
		.title {
			text-align: center;
			color: #d02121;
		}
		.subtitle{
			color: #03A9F4;
			display: flex;
			justify-content: space-between;
			padding: 5px;
		}
		.content{
			padding: 8px;
		}
		img {
			width: 100%;
		}
		.error {
			color: #FF1313;
		}
	}
</style>

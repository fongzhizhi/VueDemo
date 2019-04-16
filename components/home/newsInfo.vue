<template>
	<div>
		<h3 class="title">新闻标题</h3>
		<p class="subtitle">
			<span>发表时间：</span>
			<span>浏览量：</span>
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
			}
		},
		methods:{
			getNewsInfo(){
				this.$http.get('getNewsInfo?id='+this.id).then(result => {
					this.newsInfoHtml = result.body.html;
				}, result => {
					
				});
			}
		},
		created(){
			this.getNewsInfo();
		}
	}
</script>

<style scoped>
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
		padding: 5px;
	}
</style>

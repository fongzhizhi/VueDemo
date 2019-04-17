<template>
	<div class="comment">
		<h4>发表评论</h4>
		<hr />
		<p class="noComment" v-show="noComment">暂无评论，
		赶快抢占沙发！</p>
		<textarea id="commentText" placeholder="请你bb(120字以内)" maxlength="120" v-model="nowComment">
			
		</textarea>
		<mt-button type="primary" size="large" @click="sendComments">发表评论</mt-button>
		<div v-for="(info, i) in comments" class="commentList" :key="i++">
			<div class="userInfo">
				{{i}}楼 {{info.username}} {{info.time}}
			</div>
			<div class="saying">
				{{info.comment}}
			</div>
		</div>
		<mt-button type="danger" size="large" v-if="isMore" @click="showMore">查看更多</mt-button>
	</div>
</template>

<script>
	import {Toast} from 'mint-ui'
	export default {
		data(){
			return {
				comments: [],
				isMore: false,
				currentPage: 1,
				noComment: true,
				nowComment: '',
				username: '匿名用户',//这里应该获取登陆用户的username
			}
		},
		props: ['newsId'],
		methods: {
			getCommentLists(){
				this.$http.get('getcomments?id='+this.newsId+'&page='+this.currentPage).then(result => {
					this.comments.push(...result.body.lists);//es6
					if(!this.comments.length || this.comments.length === 0){
						this.noComment = true;
					}else{
						this.noComment = false;
					}
					this.isMore = result.body.isMore;
				}, result => {
					Toast('评论获取失败');
				});
			},
			showMore(){
				this.currentPage++;
				this.getCommentLists();
			},
			sendComments(){
				var input = this.nowComment.trim();
				if(!input){
					Toast({
						message: '评论不能为空',
						position: 'top'
					});
				}else{
					var data = {
						username: this.username,
						id: this.newsId,
						comment: input,
						time: new Date().toLocaleString(),
					}
					this.$http.post('/addComment', data).then(result => {
						this.comments.unshift(data);
						this.nowComment = '';
					},result => {
						Toast({
							message: '发表评论失败，请稍后重试',
							position: 'top'
						});
					});
				}
			}
		},
		created(){
			this.getCommentLists();
		},
	}
</script>

<style lang="scss">
	.comment{
		padding: 8px;
		.userInfo{
			background: #adc7d4;
		}
		.saying{
			margin-left: 8px;
			word-break: keep-all;
		}
		#commentText{
			width: 100%;
			height: 130px;
			margin-bottom: 5px;
			font-size: 16px;
		}
		button{
			margin: 5px 0px;
		}
		.commentList{
			margin-top: 10px;
		}
		.noComment{
			display: flex;
			justify-content: center;
		}
	}
</style>

<template>
	<div class="goodsList">
		<div class="list" v-for="i in goodsList" :key="i">
			<router-link class="good" :to='"/home/goodsInfo/"+ i'>
				<img class="goodImg" src="https://img10.360buyimg.com/n7/jfs/t26113/86/1744387083/162345/85529d06/5bebcc44N6e9ea6bc.jpg">
				<h1 class="title">【钢化膜套装】一加手机6T 8GB+128GB 墨岩黑 光感屏幕指纹 全面屏双摄游戏</h1>
			</router-link>

			<div class="info">
				<div class="price">
					<span class="now">￥3259</span>
					<span class="old">￥3339</span>
				</div>
				<div class="remark">
					<span>热卖中</span>
					<span>剩余500件</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data: () => {
			return {
				goodsList: [1,2,3,4,5]
			}
		}
	}
</script>

<style lang="scss">
.goodsList{
	display: flex;
	flex-wrap: wrap;
	padding: 0px 5px;
	justify-content: space-between;

	.list{
		width: 49%;
		border: 1px solid #aaa;
		box-shadow: 2px 2px 5px 2px #888888;
		margin: 4px 0px;
		.good{
			background: #fff;
			img.goodImg{
				width:100%;
			}
			.title{
				font-size: 13px;
			}
		}
		.info{
			.now{
				color: red;
				font-size: 15px;
			}
			.old{
				margin-left: 5px;
				text-decoration: line-through;
				font-size: 12px;
			}
			.remark{
				display: flex;
				flexDirection: column;
				font-size: 12px;
				justify-content: space-between;
			}
		}
	}
}
</style>
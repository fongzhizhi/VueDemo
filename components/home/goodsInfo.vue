<template>
<div class="goodsInfo">
	<!--静态数据：实际应根据id从服务器获取数据并展示-->
	<!--使用MUI卡片试图cardview来构建商品详情页：分为以下三部分-->

	<!--商品信息轮播图-->
	<div class="mui-card">
		<div class="mui-card-content">
			<mt-swipe :auto="5000">
				<mt-swipe-item v-for="iurl in ids">
					<img :src="iurl" />
				</mt-swipe-item>
			</mt-swipe>
		</div>
	</div>

	<!--商品参数-->
	<div class="mui-card">
		<!--页眉，放置标题-->
		<div class="mui-card-header">【钢化膜套装】一加手机6T 8GB+128GB 墨岩黑 光感屏幕指纹 全面屏双摄游戏</div>
		<!--内容区-->
		<div class="mui-card-content goodscontent">
			<div class="price">
				<div class="oldprice">市场价:<span>￥3699</span></div>
				<div class="nowprice">销售价:<span>￥3499</span></div>
			</div>
			<div class="purchase">
				购买数量：
				<div class="mui-numbox">
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input class="mui-input-numbox" type="number" value="1">
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
				</div>
			</div>
			<div class="btn">
				<button type="button" class="mui-btn mui-btn-primary">立即购买</button>
				<button type="button" class="mui-btn mui-btn-danger">加入购物车</button>
			</div>
		</div>
	</div>

	<!--评论区-->
	<div class="mui-card">
		<div class="mui-card-content">
			商品评论（敬请期待）
		</div>
	</div>
</div>
</template>

<script>
import mui from '../../dist/mui/js/mui.min.js'
export default {
	data: () => {
		return {
			ids: ['https://tse3-mm.cn.bing.net/th?id=OIP.FNJ6cxLnFQEqM8rLv4ZvUAHaFf&w=271&h=201&c=7&o=5&dpr=1.25&pid=1.7',
			'https://www.bing.com/th?id=OGC.2eccfd2bb25242342b16751a9eb953a0&pid=1.7&rurl=http%3a%2f%2fimg.cnmo-img.com.cn%2f1582_600x1000%2f1581254.gif&ehk=G43udm5EjkkjdxV%2fs2xpVQ',
			'https://tse4-mm.cn.bing.net/th?id=OIP.tppvIQdYRfeQSPDElgcCPgHaEH&w=300&h=166&c=7&o=5&dpr=1.25&pid=1.7']
		}
	},
	mouted: function(){
		mui('.mui-numbox').numbox();//初始化numbox
	}
}
</script>

<style lang="scss">
	.goodsInfo{
		.mui-card-content{
			margin: 10px;
		}
		.goodscontent > div{
			margin: 5px 0px 5px 5px;
		}
		.mint-swipe {
			height: 200px;
		}
		
		.mint-swipe-items-wrap img {
			height: 100%;
			width: 100%;
			border-image-repeat: repeat;
		}

		div.price{
			display: flex;
			.nowprice{
				margin-left: 10px;
				span{
					color: red;
					font-style: blod;
				}
			}
			.oldprice span{
				text-decoration: line-through;
			}
		}
	}
</style>
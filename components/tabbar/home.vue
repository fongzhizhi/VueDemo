<template>
	<div>
		<!--轮播图-->
		<mt-swipe :auto="3000">
			<mt-swipe-item>
				<img src="../../dist/images/ch.png" />
			</mt-swipe-item>
			<mt-swipe-item>
				<img src="../../dist/images/ch.png" />
			</mt-swipe-item>
			<mt-swipe-item>
				<img src="../../dist/images/ch.png" />
			</mt-swipe-item>
		</mt-swipe>
		<!--九宫格（栅格）-->
		<ul class="mui-table-view mui-grid-view mui-grid-9">
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
					<span class="mui-icon mui-icon-extra mui-icon-extra-new"></span>
					<div class="mui-media-body">News</div>
				</a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
					<span class="mui-icon mui-icon-image"></span>
					<div class="mui-media-body">Pictures Sharing</div>
				</a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
					<span class="mui-icon mui-icon-extra mui-icon-extra-gift"></span>
					<div class="mui-media-body">Shoping</div>
				</a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
					<span class="mui-icon mui-icon-email"><span class="mui-badge">2</span></span>
					<div class="mui-media-body">Feedback</div>
				</a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
					<span class="mui-icon mui-icon-videocam"></span>
					<div class="mui-media-body">Video Zone</div>
				</a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
					<span class="mui-icon mui-icon-phone"></span>
					<div class="mui-media-body">Contact Us</div>
				</a></li>
		</ul>
	</div>
</template>

<script>
</script>

<style scoped>
	.mint-swipe {
		height: 200px;
	}

	.mint-swipe-item {
		text-align: center;
	}

	.mint-swipe-items-wrap div:nth-child(1) {
		background-color: #c2f1f1;
	}

	.mint-swipe-items-wrap div:nth-child(2) {
		background-color: #de88615e;
	}

	.mint-swipe-items-wrap div:nth-child(3) {
		background-color: #efcfe4ad;
	}
	.mui-media-body{
		font-size: 13px !important;
	}
	span.mui-icon-extra-new{
		color: #6cde60;
	}
	span.mui-icon-image{
		color: #03a9f4;
	}
	span.mui-icon-extra-gift{
		color: #7139ad;
	}
	span.mui-icon-email{
		color: #132eff;
	}
	span.mui-icon-videocam{
		color: #607d8b;
	}
	span.mui-icon-phone{
		color: #f44336;
	}
</style>

<template>
	<div>
		<!--顶部选项卡-->
		<div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted" data-scroll="1">
			<div class="mui-scroll">
				<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
					推荐
				</a>
				<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
					热点
				</a>
				<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
					北京
				</a>
				<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
					社会
				</a>
				<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
					娱乐
				</a>
			</div>
		</div>

		<!--显示区-->
	</div>
</template>

<script>
	/*import mui from '../../dist/mui/js/mui.min.js'*/
	//TODO:由于这个组件存在bug，这里暂时搁置
	export default {
		data: function(){
			return {};
		},
		mounted: function(){
			/*mui('.mui-scroll-wrapper').scroll({
				deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
			});
			mui('body').on('tap','a',function(){document.location.href=this.href;});
			mui('body').on('click','a',function(){document.location.href=this.href;});*/
			//解决引入mui.min.js后点击底部tab栏报错的问题
		}
	}
</script>

<style>
	.mui-segmented-control.mui-segmented-control-inverted {
		width: 300px;
	}
</style>

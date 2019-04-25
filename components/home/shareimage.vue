<template>
	<div id="slider" class="mui-slider" data-slider="4">
				<div id="sliderSegmentedControl" class="mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<a class="mui-control-item mui-active" href="#item1mobile">
				待办公文
			</a>
					<a class="mui-control-item" href="#item2mobile">
				已办公文
			</a>
					<a class="mui-control-item" href="#item3mobile">
				全部公文
			</a>
				</div>
				<div id="sliderProgressBar" class="mui-slider-progress-bar mui-col-xs-4" style="transform: translate3d(0px, 0px, 0px) translateZ(0px);"></div>
				<div class="mui-slider-group" style="transform: translate3d(0px, 0px, 0px) translateZ(0px); transition-duration: 0ms; transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);">
					<div id="item1mobile" class="mui-slider-item mui-control-content mui-active">
						<div id="scroll1" class="mui-scroll-wrapper" data-scroll="1">
							<div class="mui-scroll" style="transform: translate3d(0px, 0px, 0px) translateZ(0px); transition-duration: 0ms;">
								<ul class="mui-table-view">
									<li class="mui-table-view-cell">
										第一个选项卡子项-1
									</li>
									<li class="mui-table-view-cell">
										第一个选项卡子项-2
									</li>
									<li class="mui-table-view-cell">
										第一个选项卡子项-3
									</li>
									<li class="mui-table-view-cell">
										第一个选项卡子项-4
									</li>
									<li class="mui-table-view-cell">
										第一个选项卡子项-5
									</li>
									<li class="mui-table-view-cell">
										第一个选项卡子项-6
									</li>
									<li class="mui-table-view-cell">
										第一个选项卡子项-7
									</li>
									<li class="mui-table-view-cell">
										第一个选项卡子项-8
									</li>
									<li class="mui-table-view-cell">
										第一个选项卡子项-9
									</li>
									<li class="mui-table-view-cell">
										第一个选项卡子项-10
									</li>
									<li class="mui-table-view-cell">
										第一个选项卡子项-11
									</li>
									<li class="mui-table-view-cell">
										第一个选项卡子项-12
									</li>
									<li class="mui-table-view-cell">
										第一个选项卡子项-13
									</li>
									<li class="mui-table-view-cell">
										第一个选项卡子项-14
									</li>
									<li class="mui-table-view-cell">
										第一个选项卡子项-15
									</li>
									<li class="mui-table-view-cell">
										第一个选项卡子项-16
									</li>
									<li class="mui-table-view-cell">
										第一个选项卡子项-17
									</li>
									<li class="mui-table-view-cell">
										第一个选项卡子项-18
									</li>
									<li class="mui-table-view-cell">
										第一个选项卡子项-19
									</li>
									<li class="mui-table-view-cell">
										第一个选项卡子项-20
									</li>
								</ul>
							</div>
						<div class="mui-scrollbar mui-scrollbar-vertical"><div class="mui-scrollbar-indicator" style="transition-duration: 0ms; display: block; height: 52px; transform: translate3d(0px, 0px, 0px) translateZ(0px);"></div></div></div>
					</div>
					<div id="item2mobile" class="mui-slider-item mui-control-content">
						<div id="scroll2" class="mui-scroll-wrapper" data-scroll="2">
							<div class="mui-scroll" style="transform: translate3d(0px, 0px, 0px) translateZ(0px); transition-duration: 0ms;"><ul class="mui-table-view"><li class="mui-table-view-cell">第二个选项卡子项-1</li><li class="mui-table-view-cell">第二个选项卡子项-2</li><li class="mui-table-view-cell">第二个选项卡子项-3</li><li class="mui-table-view-cell">第二个选项卡子项-4</li><li class="mui-table-view-cell">第二个选项卡子项-5</li></ul></div>
						<div class="mui-scrollbar mui-scrollbar-vertical"><div class="mui-scrollbar-indicator" style="transition-duration: 0ms; display: block; height: 207px; transform: translate3d(0px, 0px, 0px) translateZ(0px);"></div></div></div>

					</div>
					<div id="item3mobile" class="mui-slider-item mui-control-content">
						<div id="scroll3" class="mui-scroll-wrapper" data-scroll="3">
							<div class="mui-scroll" style="transform: translate3d(0px, 0px, 0px) translateZ(0px); transition-duration: 0ms;"><ul class="mui-table-view"><li class="mui-table-view-cell">第三个选项卡子项-1</li><li class="mui-table-view-cell">第三个选项卡子项-2</li><li class="mui-table-view-cell">第三个选项卡子项-3</li><li class="mui-table-view-cell">第三个选项卡子项-4</li><li class="mui-table-view-cell">第三个选项卡子项-5</li></ul></div>
						<div class="mui-scrollbar mui-scrollbar-vertical"><div class="mui-scrollbar-indicator" style="transition-duration: 0ms; display: block; height: 207px; transform: translate3d(0px, 0px, 0px) translateZ(0px);"></div></div></div>

					</div>
				</div>
			</div>
</div>
</template>

<script>
	
</script>

<style lang="scss">
	.mui-slider{
		.mui-control-content {
			background-color: white;
			min-height: 215px;
		}
		.mui-control-content, .mui-loading {
			margin-top: 50px;
		}
	}
</style>

<template>
	<view>
		<!-- // 完整配置项 (option同up.empty的配置一致) -->
		<mescroll-body ref="mescrollRef" @init="mescrollInit" @down="downCallback" @up="upCallback" :down="downOption" :up="upOption">
			<view v-for="(item,index) in dataList" :key="index">
				<uni-card :title="item.title" @click="clickCard" :extra="`第${index+1}条`"><text class="content-box-text">{{ item.body }}</text></uni-card>
			</view>
		</mescroll-body>


		<!-- <mescroll-empty v-if="dataList.length===0" :option="optEmpty" @emptyclick="emptyClick"></mescroll-empty> -->


	</view>
</template>

<script>
	import uniCard from '@/components/uni-card/uni-card.vue'
	// 引入mescroll-mixins.js
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	import MescrollEmpty from '@/components/mescroll-uni/components/mescroll-empty.vue';
	// 引入mescroll-body组件 (如已在main.js注册全局组件,则省略此步骤)
	// import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"; // 注意.vue后缀不能省
	// import MescrollBody from "mescroll-uni/mescroll-body.vue"; // npm安装的引入方式 ( npm install --save mescroll-uni )
	export default {
		mixins: [MescrollMixin], // 使用mixin
		components: {
			uniCard,
			MescrollEmpty
		},
		data() {
			return {
				// 下拉刷新的常用配置
				downOption: {
					use: true, // 是否启用下拉刷新; 默认true
					auto: true, // 是否在初始化完毕之后自动执行下拉刷新的回调; 默认true
					native: false // 启用系统自带的下拉组件,默认false;仅mescroll-body生效,mescroll-uni无效
					// (native: true, 则需在pages.json中配置 "enablePullDownRefresh": true)
				},
				// 上拉加载的常用配置
				upOption: {
					use: true, // 是否启用上拉加载; 默认true
					auto: true, // 是否在初始化完毕之后自动执行上拉加载的回调; 默认true
					page: {
						num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
						size: 10 // 每页数据的数量,默认10
					},
					noMoreSize: 5, // 配置列表的总数量要大于等于5条才显示'-- END --'的提示
					empty: {
						tip: '暂无相关数据'
					}
				},
				list: [],

				optEmpty: {
					empty: {
						tip: '暂时没'
					}
				},

				dataList: [

					// {
					// 	id: 1,
					// 	title: '标题文字',
					// 	content: '这是一个基础卡片示例，内容比较多，内容样式可自定义，卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、时间等，此示例带边框阴影。',
					// 	shadow: true,
					// 	note: '',
					// 	extra: '额外信息',
					// 	thumbnail: ''
					// },
					// {
					// 	id: 2,
					// 	title: '标题文字',
					// 	content: '这是一个基础卡片示例，内容比较多，内容样式可自定义，卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、时间等，此示例带边框阴影。',
					// 	shadow: true,
					// 	note: '',
					// 	extra: '额外信息',
					// 	thumbnail: ''
					// }
				],
			}
		},
		methods: {
			emptyClick() {
				console.log(`点击了暂无数据`)
			},
			/*下拉刷新的回调 */
			downCallback() {
				this.mescroll.resetUpScroll(); // 重置列表为第一页 (自动执行 page.num=1, 再触发upCallback方法 )
			},
			/*上拉加载的回调*/
			upCallback({
				num,
				size
			}) {
				// console.log(num,size) // 1,10
				uni.request({
					url: `https://jsonplaceholder.typicode.com/posts`,
					data: {
						_offset: num,
						_limit: size
					},
					success: (data) => {
						// 接口返回的当前页数据列表 (数组)
						let curPageData = data.data;
						// 接口返回的当前页数据长度 (如列表有26个数据,当前页返回8个,则curPageLen=8)
						let curPageLen = data.data.length;
						// 接口返回的总页数 (如列表有26个数据,每页10条,共3页; 则totalPage=3)
						let totalPage = Math.ceil(100 / size); // 向上取正
						// 接口返回的总数据量(如列表有26个数据,每页10条,共3页; 则totalSize=26)
						let totalSize = 100;
						// 接口返回的是否有下一页 (true/false)
						// let hasNext = data.xxx;

						//设置列表数据
						if (this.mescroll.num == 1) this.dataList = []; //如果是第一页需手动置空列表
						this.dataList = this.dataList.concat(curPageData); //追加新数据

						// 请求成功,隐藏加载状态
						//方法一(推荐): 后台接口有返回列表的总页数 totalPage
						this.mescroll.endByPage(curPageLen, totalPage);

						//方法二(推荐): 后台接口有返回列表的总数据量 totalSize
						//this.mescroll.endBySize(curPageLen, totalSize); 

						//方法三(推荐): 您有其他方式知道是否有下一页 hasNext
						//this.mescroll.endSuccess(curPageLen, hasNext); 
					},
					fail: () => {
						//  请求失败,隐藏加载状态
						this.mescroll.endErr()
					}
				})
			},
			clickCard() {
				uni.showToast({
					title: '点击卡片',
					icon: 'none'
				})
			},

		},
		onLoad() {

		}
	}
</script>

<style>
	/* 头条小程序组件内不能引入字体 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
		font-family: uniicons;
		font-weight: normal;
		font-style: normal;
		src: url('~@/static/uni.ttf') format('truetype');
	}

	/* #endif */

	/* #ifndef APP-NVUE */
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4;
		min-height: 100%;
		height: auto;
	}

	view {
		font-size: 14px;
		line-height: inherit;
	}

	.example {
		padding: 0 15px 15px;
	}

	.example-info {
		padding: 15px;
		color: #3b4144;
		background: #ffffff;
	}

	.example-body {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0;
		font-size: 14px;
		background-color: #ffffff;
	}

	/* #endif */
	.example {
		padding: 0 15px;
	}

	.example-info {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 15px;
		color: #3b4144;
		background-color: #ffffff;
		font-size: 14px;
		line-height: 20px;
	}

	.example-info-text {
		font-size: 14px;
		line-height: 20px;
		color: #3b4144;
	}


	.example-body {
		flex-direction: column;
		padding: 15px;
		background-color: #ffffff;
	}

	.word-btn-white {
		font-size: 18px;
		color: #FFFFFF;
	}

	.word-btn {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		border-radius: 6px;
		height: 48px;
		margin: 15px;
		background-color: #007AFF;
	}

	.word-btn--hover {
		background-color: #4ca2ff;
	}


	.example-body {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 20rpx 0;
		padding-bottom: 0;
	}

	.example-box {
		/* margin-bottom: 30rpx;
 */
	}

	.image-box {
		/* #ifndef APP-NVUE */
		display: flex;
		flex-direction: column;
		/* #endif */
		height: 350rpx;
		overflow: hidden;
	}

	.image {
		/* #ifndef APP-NVUE */
		width: 100%;
		height: 100%;
		/* #endif */
		flex: 1;
	}

	.content-box {
		padding-top: 20rpx;
	}

	.content-box-text {
		font-size: 14px;
		line-height: 20px;
	}

	.footer-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		justify-content: space-between;
		flex-direction: row;

	}

	.footer-box__item {
		align-items: center;
		padding: 10rpx 0;
		font-size: 30rpx;
		color: #666;
	}
</style>

<template>
	<view>
		<view :style="{height:`${statusBarHeight}px`}"></view>
		<!-- 章节显示 -->
		<view class="fixed-top bg-warning" v-if="menuStatus">
			<status-bar-height></status-bar-height>
			<view class="flex align-center" style="height: 80rpx;">
				<text class="font-sm px-3"> {{chapters[0].title}}</text>
			</view>
		</view>
		<!-- 底部 -->
		<view class="fixed-bottom bg-danger shadow flex align-center font" style="height: 200rpx;" v-if="menuStatus">
			<view class="flex-1 flex flex-column align-center">
				<myIcon iconId="icon-xueyuan-mulu" iconSize="50"></myIcon>
				<view>目录</view>
			</view>
			<view class="flex-1 flex flex-column align-center">
				<myIcon iconId="icon-yanjing" iconSize="50"></myIcon>
				<view>夜间</view>
			</view>
			<view class="flex-1 flex flex-column align-center">
				<myIcon iconId="icon-ziti1" iconSize="50"></myIcon>
				<view>字体</view>
			</view>
			<view class="flex-1 flex flex-column align-center">
				<myIcon iconId="icon-diqiuhuanqiu" iconSize="50"></myIcon>
				<view>更多</view>
			</view>
		</view>
		<scroll-view scroll-y="true" :style="{height: `${calHeight}rpx`}" class="bg-danger" @tap="changeMenuStatus" >
			<text class="ml-2">{{chapters[0].title}}</text>
			<rich-text space="nbsp" :nodes="testchapterText"></rich-text>
		</scroll-view>
	</view>
</template>

<script>
	import testBook from '@/common/testBook.js';
	import $U from '@/common/unit.js';
	import statusBarHeight from '@/components/statusBarHeight.vue';
	import htmlParser from '@/common/html-parser.js';
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	export default {
		components: {
			statusBarHeight,
			uniLoadMore
		},
		data() {
			return {
				calHeight: 0,
				novelName: testBook.name,
				chapters: testBook.chapters,
				statusBarHeight: 0,
				testchapterText: htmlParser(testBook.content[0].text),
				menuStatus:false,
				chapterIndex:0,
				loadedChapters:[]
			}
		},
		created() {
			// 计算高度
			this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight
			let height = $U.getSystemHeight() - $U.Torpx(this.statusBarHeight);
			this.calHeight = Math.floor(height);
			// 获取屏幕亮度
			// #ifndef H5
			// this.getBrightNess()
			// #endif
		},
		onLoad(e) {
			console.log(e.id)
		},
		methods: {
			preLoad(){
				testBook.chapters.forEach(item =>this.loadedChapters.push({
					id:item.id,
					title:item.title,
					text:item.content
				}))
			},
			changeMenuStatus(){
				this.menuStatus=!this.menuStatus
			}
		}
	}
</script>

<style>

</style>

<template>
	<view>
		<view>
			<view :style="{height:`${statusBarHeight}px`, paddingTop:`60rpx`}" class="bg-white"></view>
			<view :style="{height:`${statusBarHeight}px`}" class="fixed-top bg-white"></view>
			<view class="flex align-center position-fixed w-100 bg-white"
				:style="{height:`60rpx`,top:`${statusBarHeight}px`}" style="z-index: 99;" @tap="goBack()">
				<myIcon iconId="icon-jiantou-copy " class="mx-2"></myIcon>
				<view class="font-lg">
					<slot>图书详情</slot>
				</view>
			</view>
		</view>

		<view class="flex align-center py-2 bg-danger px-2" style="height: 250rpx;">
			<image src="../../static/logo.png" style="width: 30%;" mode="aspectFit" lazy-load="true"></image>
			<view class="flex-2 mx-2">
				<view>{{name}}</view>
				<view>{{author}}</view>
				<view class="flex align-center">
					<text>连载中</text>
					<text class="px-1">123.4万字</text>
				</view>
			</view>
		</view>

		<view class="shadow" style="height: 1233rpx;">
			<tabTop :tabArr="tabList" :tabIndex="tabIndex" @changeTabIndex="changeTabIndex"></tabTop>
			<scroll-view scroll-y v-if="tabIndex===0" style="height: 1140rpx;">
				<view >
					<view class="flex py-2 justify-center text-light-muted ">——简介——</view>
					<view class="px-2 font-lg" style="line-height: 80rpx;">{{introduction}}</view>
				</view>
			</scroll-view>
			<scroll-view scroll-y v-else style="height: 1140rpx;">
				<block v-for="item in chapters" :key="item.id">
					<view hover-class="bg-light" class="p-2 text-ellipsis border-bottom" @tap="toReadingpage(item.id)">
						{{item.title}}
					</view>
				</block>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import tabTop from '@/components/component_book/tabTop.vue';
	import testBook from '@/common/testBook.js';
	export default {
		components: {
			tabTop
		},
		onLoad(e) {
			console.log(JSON.parse(e.book))
			this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight
		},
		data() {
			return {
				tabList: ["简介", "目录"],
				tabIndex: 0,
				name: testBook.name,
				author: testBook.author,
				introduction: testBook.introduction,
				chapters: testBook.chapters
			}
		},
		methods: {
			changeTabIndex(tabIndex) {
				this.tabIndex = tabIndex
			},
			toReadingpage(id){
				uni.navigateTo({
					url:'/pages/readingPage/readingPage?id='+id
				})
			}
		}
	}
</script>

<style>

</style>

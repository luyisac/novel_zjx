<template>
	<view :style=" nightStatus? 'background-color: #4C5662;color:#C1CBCD  ;height:100vh':''">
		<view>
			<view :style="{height:`${statusBarHeight}px`, paddingTop:`60rpx`}" :class="nightStatus?'nightTheme':'bg-white'"></view>
			<view :style="{height:`${statusBarHeight}px`}" :class="nightStatus?'nightTheme': 'bg-white'"></view>
			<view class="flex align-center position-fixed w-100"
				:style="{height:`60rpx`,top:`${statusBarHeight}px`}" style="z-index: 99;" @tap="goBack()">
				<myIcon iconId="icon-jiantou-copy " class="mx-2"></myIcon>
				<view class="font-lg">
					<slot>音乐详情</slot>
				</view>
			</view>
		</view>

		<view class="d-inline-block w-100 text-center py-3 font-md">
			<view>
				<tetx>歌曲：</tetx>
				<tetx class="font-weight-bold">{{audioName}}</tetx>
			</view>
			<view>
				<tetx>歌手：</tetx>
				<tetx class="font-weight-bold">{{singerName}}</tetx>
			</view>
		</view>

		<view style="height:420rpx" class="flex align-center justify-center mt-2">
			<image src="../../static/logo.png" lazy-load="widthFix"
				style="border-radius: 35rpx; box-shadow: 0 2rpx 6rpx 0;"></image>
		</view>

		<view class="flex align-center justify-center font mt-4" style="color: #7a8388; height: 65rpx;">
			<view>{{currentTime|formatTime}}</view>
			<view style="width: 500rpx;">
				<slider block-size="16" activeColor="#E48267" :max="duration" :value="currentTime"
					@change="sliderToPlay" @changing="sliderToPlay" @tap.stop></slider>
			</view>
			<view>{{duration|formatTime}}</view>
		</view>

		<view class="flex align-center justify-center" style="padding-top: 60rpx;">
			<view class="mr-3">
				<myIcon iconId="icon-shangyishou" iconColor="" iconSize="85" @my-click="PreOrNext('pre')"></myIcon>
			</view>
			<view class="mx-5">
				<myIcon :iconId="playStatus?'icon-bofang':'icon-ziyuan'" iconColor="" iconSize="75"
					@my-click="playOrPause"></myIcon>
			</view>
			<view class="ml-2">
				<myIcon iconId="icon-xiayishou" iconColor="" iconSize="85" @my-click="PreOrNext('next')"></myIcon>
			</view>
		</view>

		<view class="flex align-center justify-center font" :class="nightStatus?'':'text-light-black'" style="padding-top: 100rpx;">
			<view class="flex align-center flex-column" @tap="changeStatus('listStatus')">
				<myIcon :iconId="listStatus?'icon-icon--':'icon-liebiao'" iconColor="" iconSize="60"></myIcon>
				<text class="pt-1">播放列表</text>
			</view>
			<view class="flex align-center flex-column" style="padding: 0 80rpx;"
				@tap="changeStatus('collectionStatus')">
				<myIcon iconId="icon-xihuan2" :iconColor="collectionStatus?'text-danger':''" iconSize="60"></myIcon>
				<text class="pt-1">收藏</text>
			</view>
			<view class="flex align-center flex-column" @tap="changeStatus('nightStatus')">
				<myIcon :iconId="nightStatus?'icon-yejianmoshi':'icon-yueliang'" iconColor="" iconSize="60"></myIcon>
				<text class="pt-1">夜间模式</text>
			</view>
		</view>

		<!-- 歌手信息 -->
		<view class="fixed-bottom shadow p-2 " style="height: 300rpx;border-radius: 30rpx; z-index: 0;" v-if="!listStatus">
			<view class="flex justify-between">
				<view>
					<view>
						<tetx>歌曲：</tetx>
						<tetx class="font-weight-bold">{{audioName}}</tetx>
					</view>
					<view>
						<tetx>歌手：</tetx>
						<tetx class="font-weight-bold">{{singerName}}</tetx>
					</view>
				</view>
				<myIcon iconId="icon-jieshao" iconSize="65" @my-click="showSingerIntroduction()"></myIcon>
			</view>

			<view>
				<view class="font-md pt-2">歌手简介：</view>
				<view class="Multi-row-truncation-3 w-100">
					{{singerIntroduction}}
				</view>
			</view>
		</view>

		<view class="fixed-bottom shadow p-2 animated fadeInUp" style="height: 400rpx;border-radius: 30rpx;" v-else>
			<view class="font-weight-bold font-md" style="height: 50rpx;">列表选择</view>
			<scroll-view scroll-y="true" style="350rpx">
				<block v-for="(item,index) in audioList" :key="item.id">
					<view class="flex align-center px-2" style="height: 85rpx;" hover-class="bg-light" @tap="selectPlay(item.id)">
						<text class="flex-1 font text-ellipsis">{{item.audioName}}</text>
						<text class="flex-1 font text-ellipsis">{{item.singerName}}</text>
						<view class="flex-1 font ml-3 flex align-center">
							<text class="mr-2">播放</text>
							<myIcon :iconId="currentIndex===index&&playStatus?'icon-bofang':'icon-bofangsanjiaoxing'" iconSize="40"></myIcon>
						</view>
					</view>
				</block>
			</scroll-view>
		</view>
		
		<!-- 歌手简介详情 -->
		<uni-popup ref="popup">
			<view class="px-2 pt-2 shadow" style="width: 600rpx; height: 850rpx;border-radius: 40rpx;" :class="nightStatus?'nightTheme':'bg-white'">
				<text class="font">{{singerIntroduction}}</text>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import {
		mapState,
		mapGetters,
		mapMutations,
		mapActions
	} from 'vuex';
	import timeUtil from '@/common/unit.js';
	import uniPopup from '@/components/uni-popup/uni-popup.vue';
	export default {
		components:{
			uniPopup
		},
		data() {
			return {
				statusBarHeight: 0,
				listStatus: false,
				collectionStatus: false,
				nightStatus: false
			}
		},
		filters: {
			...timeUtil
		},
		computed: {
			...mapState({
				playStatus: state => state.audio.playStatus,
				currentTime: state => state.audio.currentTime,
				duration: state => state.audio.duration,
				audioList: state => state.audio.audioList,
				currentIndex:state=>state.audio.currentIndex
			}),
			...mapGetters([
				'audioName',
				'singerName',
				'singerIntroduction'
			])
		},
		onLoad() {
			this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight
		},
		methods: {
			...mapActions([
				'init',
				'playOrPause',
				'changeMusic',
				'sliderToPlay',
				'selectPlay'
			]),
			...mapMutations([
				'destroyed'
			]),
			goBack() {
				uni.navigateBack({
					delta: 1,
				})
			},
			changeStatus(statusType) {
				this[statusType] = !this[statusType]
			},
			showSingerIntroduction(){
				this.$refs.popup.open()
			}
		}
	}
</script>

<style>

</style>

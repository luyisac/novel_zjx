<template>
	<view class="fixed-bottom  mx-2 mb-1 rounded" style="height: 160rpx; background-color:#D1CCC0 ;opacity:0.9;" @tap="toMusicDetail">
		<view class="flex align-center justify-center font" style="color: #7a8388; height: 65rpx;">
			<view>{{currentTime|formatTime}}</view>
			<view style="width: 500rpx;">
				<slider block-size="16" activeColor="#E48267" :max="duration" :value="currentTime" @change="sliderToPlay" @changing="sliderToPlay" @tap.stop></slider>
			</view>
			<view>{{duration|formatTime}}</view>
		</view>
		<view style="height: 95rpx;" class="flex align-center justify-between mx-2">
			<view class="font" style="color: #424651;">
				<view class="text-ellipsis" style="width: 350rpx;">歌手-{{singerName}}</view>
				<view>歌曲-{{audioName}}</view>
			</view>
			<view @tap.stop>
				<myIcon iconId="icon-shangyishou" iconSize="75" @my-click="changeMusic('pre')"></myIcon>
				<myIcon :iconId="playStatus?'icon-bofang':'icon-ziyuan'" iconSize="75" class="mx-2" @my-click="playOrPause"></myIcon>
				<myIcon iconId="icon-xiayishou" iconSize="75"@my-click="changeMusic('next')"></myIcon>
			</view>
		</view>
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
	export default {
		name: "myAudio",
		filters:{
			...timeUtil
		},
		computed: {
			...mapState({
				name:state=>state.audio.name,
				singerName:state=>state.audio.singerName,
				playStatus:state=>state.audio.playStatus,
				currentTime:state=>state.audio.currentTime,
				duration:state=>state.audio.duration
			}),
			...mapGetters([
				'audioName',
				'singerName'
			])
		},
		mounted() {
			this.init()
		},
		destroyed() {
			this.destroyed()
		},
		data() {
			return {

			};
		},
		methods:{
			...mapMutations([
				'destroyed'
			]),
			...mapActions([
				'init',
				'playOrPause',
				'changeMusic',
				'sliderToPlay'
			]),
			toMusicDetail(){
				console.log("跳转")
				uni.navigateTo({
					url:'/pages/musicDetail/musicDetail',
					fail(e) {
						console.log(e)
					}
				})
			}
		}
	}
</script>

<style>

</style>

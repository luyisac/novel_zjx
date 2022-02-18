<template>
	<view class="m-2 rounded-big">
		<swiper indicator-dots autoplay circular indicator-active-color="#ffffff" style="height: 380rpx;"
			@change="getCurrentImgIndex">
			<swiper-item v-for="(item, index) in imgArr" :key="index">
				<image :src="item.src" mode="aspectFill" class="w-100 animated"
					:class="currentImgIndex == index?'my-animate':''"></image>
			</swiper-item>
		</swiper>
	</view>
</template>
 
<script>
	export default {
		name: "rotationChart",
		data() {
			return {
				currentImgIndex: 0
			}
		},
		props: {
			imgArr: {
				type: Array,
				default: () => []
			},
		},
		mounted() {
			console.log(this.imgArr)
		},
		methods: {
			getCurrentImgIndex(e) {
				this.currentImgIndex = e.detail.current
			}
		},
	}
</script>

<style>

</style>

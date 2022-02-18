<template>
	<view>
		<view class="topStatus" :style="{height:statusBarHeight+'px'}"></view>
	</view>
</template>

<script>
	export default {
		name:"statusBarHeight",
		data() {
			return {
				statusBarHeight:0,
			};
		},
		created() {
			this.statusBarHeight=uni.getSystemInfoSync().statusBarHeight
			console.log(this.statusBarHeight)
		}
	}
</script>

<style>
  .topStatus{
	  z-index: 2
  }
</style>

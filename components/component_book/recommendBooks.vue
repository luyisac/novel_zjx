<template>
	<view>
		<list-header>
			<template #title>推荐</template>
			<template #tips>查看全部</template>
		</list-header>
		<view class="flex align-center">
			<block v-for="(item,index) in recommendBooks" :key="index">
				<view class="flex flex-column align-center flex-1 position-relative"@tap="toBookDetail(item)">
					<image :src="item.src" mode="widthFix" class="w-90"></image>
					<text class="font my-1 text-light-black">{{item.name}}</text>
					<myIcon iconId="icon-erji" iconColor="text-light-white" iconSize="40" class="position-absolute"
					style="left: 45rpx; top: 20rpx;"></myIcon>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	import listHeader from '@/components/listHeader.vue';
	export default {
		name:"recommendBooks",
		props:{
			recommendBooks:{
				type:Array,
				default:()=>[]
			}
		},
		components:{
			listHeader
		},
		data() {
			return {
				
			};
		},
		methods:{
			toBookDetail(item){
				uni.navigateTo({
					url:'/pages/bookDetail/bookDetail?book='+JSON.stringify(item)
				})
			}
		}
	}
</script>

<style>

</style>

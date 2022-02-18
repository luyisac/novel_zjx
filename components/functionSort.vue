<template>
	<view class="flex flex-row justify-between mx-3 py-2">
		<block v-for="(item,index) in functionSortArr" :key="index">
			<view class="flex flex-column align-center" @tap="switchToPage(index)">
				<myIcon :iconId="item.iconId" :iconColor="item.iconColor" iconSize="65"></myIcon>
				<text class=" font text-light-black">{{item.name}}</text>
			</view>
		</block>
	</view>
</template>

<script>
	let pageList={
		[0]:"/pages/rankList/rankList",
		[1]:"/pages/listenNovel/listenNovel",
		[2]:"/pages/listenMusic/listenMusic",
		[3]:"/pages/excellentNovel/excellentNovel"
	}
	export default {
		name:"functionSort",
		props:{
			functionSortArr:{
				type:Array,
				default:()=>[]
			}
		},
		mounted() {
			console.log(this.functionSortArr)
		},
		data() {
			return {
				
			};
		},
		methods:{
			switchToPage(pageIndex){
				console.log("点击跳转"+pageIndex)
				uni.navigateTo({
					url:pageList[pageIndex]
				})
			}
		}
	}
</script>

<style>

</style>

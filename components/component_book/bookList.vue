<template>
	<view>
		<block v-for="(item,index) in bookList" :key="index">
			<list-header v-if="item.headerTitle">
				<template #title>{{item.headerTitle}}</template>
			</list-header>
			<block v-for="(book,index) in item.books">
				<view class="border-bottom flex align-center p-1 border-bottom" style="height: 320rpx;">
					<image :src="book.imgUrl" mode="aspectFill" class="rounded mx-2" style="width: 250rpx; height: 320rpx;"></image>
					<view class="flex-1" style="height: 100%;">
						<view class="py-2 font-md font-weight-bold">《{{book.name}}》</view>
						<view class="font text-light-black Multi-row-truncation">{{book.introduction}}</view>
					</view>
				</view>
			</block>
		</block>
	</view>
</template>

<script>
	export default {
		name:"bookList",
		props:{
			bookList:{
				type:Array,
				default:()=>{}
			}
		},
		mounted() {
			console.log(this.bookList)
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>

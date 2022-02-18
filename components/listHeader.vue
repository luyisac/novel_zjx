<template>
	<view class="flex align-center justify-between p-2 m-1">
		<view class="font-lg">
			<slot name="title"></slot>
		</view>
		<view class="flex align-center">
			<view class="font text-muted">
				<slot name="tips">查看全部</slot>
			</view>
			<myIcon iconId="icon-iconfonti" iconColor="text-muted"></myIcon>
		</view>
	</view>
</template>

<script>
	export default {
		name: "listHeader",
		data() {
			return {

			};
		}
	}
</script>

<style>

</style>

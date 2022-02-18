<template>
	<view>
		<view>
			<view :style="{height:`${statusBarHeight}px`, paddingTop:`60rpx`}" class="bg-white"></view>
			<view :style="{height:`${statusBarHeight}px`}" class="fixed-top bg-white"></view>
			<view class="flex align-center position-fixed w-100 bg-white" :style="{height:`60rpx`,top:`${statusBarHeight}px`}" style="z-index: 99;" @tap="goBack()">
				<myIcon iconId="icon-jiantou-copy " class="mx-2"></myIcon>
				<view class="font-lg">
					<slot>榜单</slot>
				</view>
			</view>
		</view>
		<book-list :bookList="rankList"></book-list>
		<uni-load-more :status="loadMoreStatus"></uni-load-more>
	</view>
</template>

<script>
	let testData=[{
					headerTitle: "热门",
					isLoadMore:'正在加载中',
					books: [{
							name: "斗破苍穹",
							imgUrl: "/static/logo.png",
							introduction: '虽然如今人类已经失去了当初的理想，曾经作为人类文明守夜人的星际联合舰队已经分崩离析，但这段古老的誓言却依然被传承着。无论星河联邦、玛尔斯帝国还是其他大大小小上百个星国，所有的新兵入伍时都要仰望星空念出这段誓词。“阳光可以照耀你我，却不能阻止黑暗的降临。我们是光明之子，在黑夜里守护群星。未知的恐惧常在，只有勇气才能点亮希望之光......”遭人陷害离开星际舰队的特战老兵铁星寒，被迫在偏远的星球上拾荒度日，一场突入其来的灾难改变了他的命运，面对必死之局，他必须勇往直前才能觅得生机！'
						},
						{
							name: "舞动抢矿",
							imgUrl: "/static/logo.png",
							introduction: '虽然如今人类已经失去了当初的理想，曾经作为人类文明守夜人的星际联合舰队已经分崩离析，但这段古老的誓言却依然被传承着。无论星河联邦、玛尔斯帝国还是其他大大小小上百个星国，所有的新兵入伍时都要仰望星空念出这段誓词。“阳光可以照耀你我，却不能阻止黑暗的降临。我们是光明之子，在黑夜里守护群星。未知的恐惧常在，只有勇气才能点亮希望之光......”遭人陷害离开星际舰队的特战老兵铁星寒，被迫在偏远的星球上拾荒度日，一场突入其来的灾难改变了他的命运，面对必死之局，他必须勇往直前才能觅得生机！'
						},
						{
							name: "大主宰",
							imgUrl: "/static/logo.png",
							introduction: '虽然如今人类已经失去了当初的理想，曾经作为人类文明守夜人的星际联合舰队已经分崩离析，但这段古老的誓言却依然被传承着。无论星河联邦、玛尔斯帝国还是其他大大小小上百个星国，所有的新兵入伍时都要仰望星空念出这段誓词。“阳光可以照耀你我，却不能阻止黑暗的降临。我们是光明之子，在黑夜里守护群星。未知的恐惧常在，只有勇气才能点亮希望之光......”遭人陷害离开星际舰队的特战老兵铁星寒，被迫在偏远的星球上拾荒度日，一场突入其来的灾难改变了他的命运，面对必死之局，他必须勇往直前才能觅得生机！'
						}, {
							name: "元尊",
							imgUrl: "/static/logo.png",
							introduction: '虽然如今人类已经失去了当初的理想，曾经作为人类文明守夜人的星际联合舰队已经分崩离析，但这段古老的誓言却依然被传承着。无论星河联邦、玛尔斯帝国还是其他大大小小上百个星国，所有的新兵入伍时都要仰望星空念出这段誓词。“阳光可以照耀你我，却不能阻止黑暗的降临。我们是光明之子，在黑夜里守护群星。未知的恐惧常在，只有勇气才能点亮希望之光......”遭人陷害离开星际舰队的特战老兵铁星寒，被迫在偏远的星球上拾荒度日，一场突入其来的灾难改变了他的命运，面对必死之局，他必须勇往直前才能觅得生机！'
						},
						{
								name: "斗破苍穹",
								imgUrl: "/static/logo.png",
								introduction: '虽然如今人类已经失去了当初的理想，曾经作为人类文明守夜人的星际联合舰队已经分崩离析，但这段古老的誓言却依然被传承着。无论星河联邦、玛尔斯帝国还是其他大大小小上百个星国，所有的新兵入伍时都要仰望星空念出这段誓词。“阳光可以照耀你我，却不能阻止黑暗的降临。我们是光明之子，在黑夜里守护群星。未知的恐惧常在，只有勇气才能点亮希望之光......”遭人陷害离开星际舰队的特战老兵铁星寒，被迫在偏远的星球上拾荒度日，一场突入其来的灾难改变了他的命运，面对必死之局，他必须勇往直前才能觅得生机！'
							},
							{
								name: "舞动抢矿",
								imgUrl: "/static/logo.png",
								introduction: '虽然如今人类已经失去了当初的理想，曾经作为人类文明守夜人的星际联合舰队已经分崩离析，但这段古老的誓言却依然被传承着。无论星河联邦、玛尔斯帝国还是其他大大小小上百个星国，所有的新兵入伍时都要仰望星空念出这段誓词。“阳光可以照耀你我，却不能阻止黑暗的降临。我们是光明之子，在黑夜里守护群星。未知的恐惧常在，只有勇气才能点亮希望之光......”遭人陷害离开星际舰队的特战老兵铁星寒，被迫在偏远的星球上拾荒度日，一场突入其来的灾难改变了他的命运，面对必死之局，他必须勇往直前才能觅得生机！'
							},
							{
								name: "大主宰",
								imgUrl: "/static/logo.png",
								introduction: '虽然如今人类已经失去了当初的理想，曾经作为人类文明守夜人的星际联合舰队已经分崩离析，但这段古老的誓言却依然被传承着。无论星河联邦、玛尔斯帝国还是其他大大小小上百个星国，所有的新兵入伍时都要仰望星空念出这段誓词。“阳光可以照耀你我，却不能阻止黑暗的降临。我们是光明之子，在黑夜里守护群星。未知的恐惧常在，只有勇气才能点亮希望之光......”遭人陷害离开星际舰队的特战老兵铁星寒，被迫在偏远的星球上拾荒度日，一场突入其来的灾难改变了他的命运，面对必死之局，他必须勇往直前才能觅得生机！'
							}, {
								name: "元尊",
								imgUrl: "/static/logo.png",
								introduction: '虽然如今人类已经失去了当初的理想，曾经作为人类文明守夜人的星际联合舰队已经分崩离析，但这段古老的誓言却依然被传承着。无论星河联邦、玛尔斯帝国还是其他大大小小上百个星国，所有的新兵入伍时都要仰望星空念出这段誓词。“阳光可以照耀你我，却不能阻止黑暗的降临。我们是光明之子，在黑夜里守护群星。未知的恐惧常在，只有勇气才能点亮希望之光......”遭人陷害离开星际舰队的特战老兵铁星寒，被迫在偏远的星球上拾荒度日，一场突入其来的灾难改变了他的命运，面对必死之局，他必须勇往直前才能觅得生机！'
							}
						
					]
				}];
	import statusBarHeight from '@/components/statusBarHeight.vue';
	import bookList from '@/components/component_book/bookList.vue';
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	export default {
		components: {
			statusBarHeight,
			bookList,
			uniLoadMore
		},
		data() {
			return {
				statusBarHeight:0,
				rankList: [],
				loadMoreStatus:'loading'
			}
		},
		onLoad() {
			this.statusBarHeight=uni.getSystemInfoSync().statusBarHeight
			this.initRankList()
		},
		onReachBottom() {
			
		},
		methods: {
			initRankList(){
				let dataList=testData;
				console.log(dataList)
				setTimeout(()=>{
					if(dataList.length){
						this.rankList=dataList
						this.loadMoreStatus='more'
						console.log(this.rankList)
					}
				},2000)
			},
			/* 触底加载 */
			/* 数据处理问题不统一 */
			loadMore(){
				let obj= testData;
				switch(obj.isLoadMore){
					case '正在加载中':
					return
					break;
					case '没有更多了':
					this.loadMoreStatus='nomore'
					break;
					case '上拉加载更多':
					{
						setTimeout(()=>{
							this
						})
					}
				}
			},
			goBack() {
				console.log("返回")
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style>

</style>

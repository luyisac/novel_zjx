<template>
	<view>
		<statusBarHeight></statusBarHeight>
		<search></search>
		<rotation-chart :imgArr="swiperImage"></rotation-chart>
		<function-sort :functionSortArr="functionSortArr"></function-sort>

		<recommend-books :recommendBooks="recommendBooks"></recommend-books>
		<book-list :bookList="bookList"></book-list>
		<myaudio></myaudio>
	</view>
</template>

<script>
	import statusBarHeight from '@/components/statusBarHeight.vue';
	import search from '@/components/search.vue';
	import rotationChart from '@/components/rotationChart.vue';
	import functionSort from '@/components/functionSort.vue';
	import listHeader from '@/components/listHeader.vue';
	import recommendBooks from '@/components/component_book/recommendBooks.vue';
	import bookList from '@/components/component_book/bookList.vue';
	import Myaudio from '@/components/music/myAudio.vue';
	export default {
		components: {
			statusBarHeight,
			search,
			rotationChart,
			functionSort,
			listHeader,
			recommendBooks,
			bookList,
			Myaudio
		},
		data() {
			return {
				/* 轮播图数据 */
				swiperImage: [{
					src: "/static/logo.png"
				}, {
					src: "/static/logo.png"
				}, {
					src: "/static/logo.png"
				}],
				/* 功能列表 */
				functionSortArr: [{
						iconId: 'icon-icon-test',
						iconColor: 'text-warning',
						name: '看榜单'
					},
					{
						iconId: 'icon-startRead',
						iconColor: 'text-hover-primary',
						name: '听小说'
					},
					{
						iconId: 'icon-icon09',
						iconColor: 'text-light-black',
						name: '听音乐'
					},
					{
						iconId: 'icon-zhishi',
						iconColor: 'text-success',
						name: '听知识'
					}
				],
				recommendBooks: [{
						id: 1,
						name: "战神狂飙",
						src: "/static/logo.png"
					},
					{
						id: 2,
						name: "斗破苍穹",
						src: "/static/user/user.jpg"
					}, {
						id: 3,
						name: "武动乾坤",
						src: "/static/logo.png"
					}
				],
				bookList:[{
					headerTitle:"热门",
					books:[
						{
							name:"斗破苍穹",
							imgUrl:"/static/logo.png",
							introduction:'虽然如今人类已经失去了当初的理想，曾经作为人类文明守夜人的星际联合舰队已经分崩离析，但这段古老的誓言却依然被传承着。无论星河联邦、玛尔斯帝国还是其他大大小小上百个星国，所有的新兵入伍时都要仰望星空念出这段誓词。“阳光可以照耀你我，却不能阻止黑暗的降临。我们是光明之子，在黑夜里守护群星。未知的恐惧常在，只有勇气才能点亮希望之光......”遭人陷害离开星际舰队的特战老兵铁星寒，被迫在偏远的星球上拾荒度日，一场突入其来的灾难改变了他的命运，面对必死之局，他必须勇往直前才能觅得生机！'
						},
						{
							name:"舞动抢矿",
							imgUrl:"/static/logo.png",
							introduction:'虽然如今人类已经失去了当初的理想，曾经作为人类文明守夜人的星际联合舰队已经分崩离析，但这段古老的誓言却依然被传承着。无论星河联邦、玛尔斯帝国还是其他大大小小上百个星国，所有的新兵入伍时都要仰望星空念出这段誓词。“阳光可以照耀你我，却不能阻止黑暗的降临。我们是光明之子，在黑夜里守护群星。未知的恐惧常在，只有勇气才能点亮希望之光......”遭人陷害离开星际舰队的特战老兵铁星寒，被迫在偏远的星球上拾荒度日，一场突入其来的灾难改变了他的命运，面对必死之局，他必须勇往直前才能觅得生机！'
						},
						{
							name:"大主宰",
							imgUrl:"/static/logo.png",
							introduction:'虽然如今人类已经失去了当初的理想，曾经作为人类文明守夜人的星际联合舰队已经分崩离析，但这段古老的誓言却依然被传承着。无论星河联邦、玛尔斯帝国还是其他大大小小上百个星国，所有的新兵入伍时都要仰望星空念出这段誓词。“阳光可以照耀你我，却不能阻止黑暗的降临。我们是光明之子，在黑夜里守护群星。未知的恐惧常在，只有勇气才能点亮希望之光......”遭人陷害离开星际舰队的特战老兵铁星寒，被迫在偏远的星球上拾荒度日，一场突入其来的灾难改变了他的命运，面对必死之局，他必须勇往直前才能觅得生机！'
						},{
							name:"元尊",
							imgUrl:"/static/logo.png",
							introduction:'虽然如今人类已经失去了当初的理想，曾经作为人类文明守夜人的星际联合舰队已经分崩离析，但这段古老的誓言却依然被传承着。无论星河联邦、玛尔斯帝国还是其他大大小小上百个星国，所有的新兵入伍时都要仰望星空念出这段誓词。“阳光可以照耀你我，却不能阻止黑暗的降临。我们是光明之子，在黑夜里守护群星。未知的恐惧常在，只有勇气才能点亮希望之光......”遭人陷害离开星际舰队的特战老兵铁星寒，被迫在偏远的星球上拾荒度日，一场突入其来的灾难改变了他的命运，面对必死之局，他必须勇往直前才能觅得生机！'
						}
					]
				}]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
</style>

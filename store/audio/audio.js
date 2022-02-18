import Resources from './Resources.js';
let musicRec = Resources.musicRecources;

let audio;
export default {
	state: {
		playStatus: false,
		currentIndex: 0,
		duration: 0,
		currentTime: 0,
		audioList: []
	},
	getters: {
		audioName(state) {
			return musicRec[state.currentIndex].name
		},
		singerName(state) {
			return musicRec[state.currentIndex].singer.name;
		},
		singerIntroduction(state) {
			return musicRec[state.currentIndex].singer.introduction;
		}
	},
	mutations: {
		addAudioEvent(state, dispatch) {
			audio.onPlay(() => {
				console.log("开始");
				state.duration = audio.duration
			});
			audio.onPause(() => {
				console.log("暂停")
			});
			audio.onStop(() => {
				console.log("停止")
			});
			audio.onEnded(() => {
				console.log("结束")
				state.playStatus = false;
				dispatch('changeMusic', 'next')
			});
			audio.onError((res) => {
				console.log("错误")
				console.log(res.errMsg);
				console.log(res.errCode);
			});
			audio.onCanplay(() => {
				state.duration = audio.duration
			})
			audio.onTimeUpdate(() => {
				state.currentTime = audio.currentTime
			})
		},
		destroyed() {
			audio.offPlay();
			audio.onPause();
			audio.onStop();
			audio.offEnded();
			audio.onError();
		},
		audioPlay(state) {
			audio.src = musicRec[state.currentIndex].src;
			console.log(audio.duration)
			audio.play()
		},
		/* 滑动 */
		audioSeek({
			state
		}, position) {
			audio.seek(position)
		},
		audioPause() {
			audio.pause()
		},
		audioStop() {
			audio.stop()
		},
		changePlayIndex(state, index) {
			console.log(index)
			state.currentIndex = index;
			audio.src = musicRec[state.currentIndex].src;
			state.currentTime = 0
		},
		changeCurrentTime(state, time) {
			state.currentTime = time
		},
		/* 获取音频列表 */
		getAudioList(state, audioList) {
			console.log("初始化list")
			for (let item of audioList) {
				state.audioList.push({
					id: item.id,
					audioName: item.name,
					singerName: item.singer.name,
					playStatus: 0
				})
			}
			console.log(state.audioList)
		}
	},
	actions: {
		init({
			commit,
			dispatch,
			state
		}) {
			if (audio) {
				return
			}
			audio = uni.createInnerAudioContext();
			commit('addAudioEvent', dispatch);
			commit('getAudioList', musicRec)
			console.log(musicRec[state.currentIndex].src)
			audio.src = musicRec[state.currentIndex].src;
		},
		playOrPause({
			state,
			commit
		}) {
			console.log("触发按键")
			state.playStatus = !state.playStatus
			if (state.playStatus) {
				commit('audioPlay')
			} else {
				commit('audioPause')
			}
		},
		changeMusic({
			state,
			commit
		}, type) {
			let index = state.currentIndex;
			let lastindex = musicRec.length - 1;
			console.log(index, lastindex)
			commit("audioStop");
			switch (type) {
				case 'pre':
					index === 0 ? commit("changePlayIndex", lastindex) : commit("changePlayIndex", index - 1)
					break;
				case 'next':
					index === lastindex ? commit("changePlayIndex", 0) : commit("changePlayIndex", index + 1)
					break;
				default:
					break;
			}
			if (state.playStatus) {
				commit("audioPlay");
			}
		},
		sliderToPlay({
			state,
			commit
		}, {
			detail: {
				value: position
			}
		}) {
			commit("audioSeek", position)
			if (!state.playStatus) {
				commit('changeCurrentTime', position)
			}
		},
		selectPlay({
			state,
			commit
		}, id) {
			let currentIndex = musicRec.findIndex(item => item.id === id);
			if (state.currentIndex === currentIndex ) {
				if(state.playStatus){
					commit('audioPause');
				}
				else{
					commit('audioPlay');
				}
				state.playStatus = !state.playStatus
				return
			} else {
				commit('audioStop')
			}
			if (!state.playStatus)
				state.playStatus = !state.playStatus
			commit('changePlayIndex', currentIndex)
			commit('audioPlay')
		}
	}
}

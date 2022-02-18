// // vue3 的写法
// import App from './App'

// // #ifndef VUE3
// import Vue from 'vue'

// Vue.config.productionTip = false
// App.mpType = 'app'

// Vue.prototype.$statusBarHeight=uni.getSystemInfoSync().statusBarHeight

// const app = new Vue({
//     ...App
// })
// app.$mount()
// // #endif

// // #ifdef VUE3
// import { createSSRApp } from 'vue'
// export function createApp() {
//   const app = createSSRApp(App)
//   return {
//     app
//   }
// }
// // #endif

// vue2 以下为vue2

 import App from './App'
 
 import store from'store'
 
 import Vue from 'vue'
 
 import myIcon from '@/components/myIcon.vue';
 Vue.component('myIcon',myIcon)
 App.mpType = 'app'
 Vue.prototype.$store=store
 const app = new Vue({
     ...App
 })
 app.$mount()
 

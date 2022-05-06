import Vue from "vue";
import App from './App.vue';
import router from './router';
import store from './store';
//import i18n from './i18n/';
import Element from 'element-ui';
import './assets/css/element-variables.scss'


//import enLocale from 'element-ui/lib/locale/lang/en';
//import zhLocale from 'element-ui/lib/locale/lang/zh-CN';

Vue.use(Element);

//Vue.config.lang = 'zh-cn'
//Vue.locale('zh-cn', zhLocale)
//Vue.locale('en', enLocale)

//import VueI18n from 'vue-i18n'
//Vue.use(VueI18n) // 通过插件的形式挂载
//const i18n = new VueI18n({
  //locale: 'zh',    // 语言标识
  //this.$i18n.locale // 通过切换 locale 的值来实现语言切换
  //messages: {
    //'zh': require('@/i18n/config/zh.js'),   // 中文语言包
    //'en': require('@/i18n/config/en.js')    // 英文语言包
  //}
//})


Vue.config.productionTip = false

new Vue({
  router,
  store,
//  i18n,
  render: h => h(App)
}).$mount('#app')

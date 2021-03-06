import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;
App.mpType = 'app';

const app = new Vue(App);
app.$mount();

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/login/main', 'pages/weibo/main', 'pages/mweibo/main', 'pages/mweiboDetial/main', '^pages/index/main'],
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#E6162D',
      navigationBarTitleText: '观止于此',
      navigationBarTextStyle: '#fff',
    },
  },
};

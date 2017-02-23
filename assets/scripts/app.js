import Vue from 'vue';
import App from './containers/app';
import Store from './store/app';
import Router from './router/app';

// 初期データの取得
Store.dispatch('talkList');

// 描画開始
const app = new Vue({
  el: '#app',
  router: Router,
  store: Store,
  render: function(h) { return <App></App>; }
});

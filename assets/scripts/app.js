import Vue from 'vue';
import App from './components/app';
import Store from './store/app';
import Router from './router/app';

// 描画開始
const app = new Vue({
  router: Router,
  render: function(h) { return <App></App>; }
}).$mount('#app');

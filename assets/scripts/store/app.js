import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// 初期の状態データ
const state = {
  count: 0
};
// storeの状態を返却する。
// なんらかの処理を加え加工することも可能
const getters = {
  doneTodos (state) {
    return state.todos.filter(todo => todo.done)
  }
};
// ミューテーションと似ているが
// アクションは、状態を変更するのではなく、ミューテーションをコミット。
// アクションは任意の非同期処理を含むことができる。
// store.dispatch('increment');で呼び出す。
const actions = {
  increment (context) {
    context.commit('increment');
  }
};
// state更新のための処理
const mutations = {
  increment (state) {
    state.count++;
    console.log(state);
  }
};
// 拡張機能の追加
const plugins = [];

// vuexのインスタンス
const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins,
  strict: process.env.NODE_ENV !== 'production'
});
export default store;
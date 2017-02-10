<template>
  <div id="app" v-on:click="parentDataChange">
    <headerView></headerView>
    <mainView></mainView>
    <!-- 親コンポーネントから子コンポーネントにデータを渡す場合は、
    カスタムディレクティブ（ここではmy-component）のところに
    「v-bind:<渡すときの変数名>="<自身のデータ>"」と明示的に指定しなければならない。
    ちなみにv-bind:myMessageは:myMessageと省略することができる
    親コンポーネントからデータを受け取る場合は、propsに親から渡ってくる変数名を書く-->
    <footerView :testData="testData" v-on:test="testtest"></footerView>
    <span>{{ testData }}</span>
  </div>
</template>

<script>
import headerView from './layout/header';
import footerView from './layout/footer';
import mainView from './layout/main';
export default {
  data () {
    return {
      testData: 'testData'
    };
  },
  methods: {
    testtest (data, e) {
      console.log(data);
      console.log(this);
      this.$set(this.$data, 'testData', data);
    },
    parentDataChange () {
      this.$set(this.$data, 'testData', 'parentDataChange');
    }
  },
  components: {
    headerView: headerView,
    footerView: footerView,
    mainView: mainView
  }
};
</script>

<style lang="sass">
// ファンデーション
@import './assets/styles/_app';
#app {
  background-color: #666;
  width: 300px;
  height: 300px;
  position: relative;
  & > .header {
    background-color: #999;
    width: 100px;
    height: 100px;
  }
}
</style>

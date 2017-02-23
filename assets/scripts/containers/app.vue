<template>
  <div id="app">
    <headerView></headerView>
    <mainView></mainView>
    <footerView></footerView>
  </div>
</template>

<script>
  import headerView from './layout/header';
  import footerView from './layout/footer';
  import mainView from './layout/main';
  export default {
    data () {
      return {};
    },
    methods: {},
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
</style>

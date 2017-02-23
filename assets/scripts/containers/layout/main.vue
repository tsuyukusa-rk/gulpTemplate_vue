<template>
  <main class="main">
    <talkListView :sample="this.$store.state.talkList"></talkListView>
    <sendFormView></sendFormView>
  </main>
</template>

<script>
  import talkListView from '../../components/talkList';
  import sendFormView from '../../components/sendForm';
  export default {
    methods: {},
    data () {
      return {};
    },
    components: {
      talkListView: talkListView,
      sendFormView: sendFormView
    }
  };
</script>

<style lang="sass" scoped>
  .main {
    border-bottom: 1px solid #000;
  }
</style>

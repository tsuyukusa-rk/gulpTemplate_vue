<template>
  <footer class="footer" v-on:click.stop="test('切り替わった',$event)">
    footer
    {{ testData }}
  </footer>
</template>

<script>
import Store from '../../store/app';
export default {
  props: [
    'testData'
  ],
  methods: {
    test (data, e) {
      this.$emit('test', data, e);
      console.log(this);
      Store.dispatch('increment');
    },
    test2 () {
      this.test();
    }
  },
  components: {}
};
</script>

<style lang="sass" scoped>
  .footer {
    background-color: #ddd;
    position: absolute;
    bottom: -100px;
    width: 300px;
    height: 100px;
  }
</style>

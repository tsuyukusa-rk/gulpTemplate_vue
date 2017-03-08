<template>
  <div>
    <form>
      <textarea @input='resizeTextarea' :style='{ height: "20px", lineHeight: "20px" }' rows='1' wrap='hard' v-model='message' placeholder='edit me'></textarea>
      <input type='button' value='送信' v-on:click='send'>
      <p>{{windowHeight}}</p>
    </form>
  </div>
</template>

<script>
  import mutationTypes from '../store/mutationTypes';
  export default {
    data () {
      return {
        message: '初期値',
        windowHeight: window.innerHeight
      };
    },
    methods: {
      send () {
        this.$store.dispatch(mutationTypes.talkList, {
          id: new Date().getTime(),
          type: 'is-right',
          icon: 'https://placehold.jp/150x150.png',
          text: this.$data.message
        });
        this.windowHeight = window.innerHeight;
      },
      resizeTextarea (e) {
        if (e.target.scrollHeight > e.target.offsetHeight) {
          e.target.style.height = e.target.scrollHeight + 'px';
        } else {
          let height = '';
          let lineHeight = '';
          while (true) {
            height = Number(e.target.style.height.split('px')[0]);
            lineHeight = Number(e.target.style.lineHeight.split('px')[0]);
            e.target.style.height = height - lineHeight + 'px';
            if (e.target.scrollHeight > e.target.offsetHeight) {
              e.target.style.height = e.target.scrollHeight + 'px';
              break;
            }
          }
        }
        this.windowHeight = window.innerHeight;
      }
    }
  };
</script>

<style lang='sass' scoped>
  textarea {

  }
  p {
    position: absolute;
    top: 385px;
  }
</style>

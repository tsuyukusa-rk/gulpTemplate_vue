<template>
  <div>
    <input type="text">
    <input type="button" value="送信" v-on:click="send">
  </div>
</template>
<script>
  export default {
    methods: {
      send() {
        console.log('送信');
      }
    }
  };
</script>
<style lang="sass" scoped></style>

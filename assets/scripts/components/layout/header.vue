<template>
  <header class="header">
    header
    <ul v-for="(item, i) in ['index1','index2','index3']">
      <li>SPA</li>
      <li>{{item}}</li>
    </ul>
  </header>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="sass" scoped></style>

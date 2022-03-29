<template>
  <div id="app">
    <flix-header />
    <flix-search-main />
  </div>
</template>

<script>
import FlixHeader from './components/FlixHeader.vue'
import FlixSearchMain from './components/FlixSearchMain.vue'

export default {
  name: 'App',
  components: {
    FlixHeader,
    FlixSearchMain
  }
}
</script>

<style lang="scss">
  @import "../node_modules/bootstrap/scss/bootstrap";
</style>

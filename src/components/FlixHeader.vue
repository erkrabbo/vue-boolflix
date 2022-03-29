<template>
  <header>
    <h1>BOOLFLIX</h1>
    <movie-input-search />
  </header>
</template>

<script>
import MovieInputSearch from './MovieInputSearch.vue'

export default {
  name: 'FlixHeader',
  components: {
    MovieInputSearch
  }
}
</script>

<style scoped lang="scss">
  header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    color: red;
  }
</style>

<template>
  <header class="p-2">
    <h1 class="m-0 me-2">BOOLFLIX</h1>
    <movie-input-search @searchRequest="$emit('searchRequest', $event)"/>
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

    height: 40px;
  }
</style>

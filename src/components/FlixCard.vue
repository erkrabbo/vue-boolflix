<template>
  <div class="col">
    <div class="card h-100">
      <h1>{{dataFilm.original_title}}</h1>
      <img :src="'https://image.tmdb.org/t/p/original/' + dataFilm.poster_path" :alt="dataFilm.original_title">
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlixCard',
  props: {
    dataFilm: Object
  }
}
</script>

<style scoped>
  .card{
    background-color: black;
    color: white;
  }
</style>

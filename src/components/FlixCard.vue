<template>
  <div class="col">
    <div class="card h-100">
      <h2 v-if="dataFilm.title != dataFilm.original_title">{{dataFilm.title}}</h2>
      <h2>{{dataFilm.original_title}}</h2>
      <lang-flag :iso="dataFilm.original_language" />
      <!-- <h3>{{dataFilm.original_language}}</h3> -->
      <h3>{{dataFilm.vote_average}}</h3>
      <img :src="'https://image.tmdb.org/t/p/original/' + dataFilm.poster_path" :alt="dataFilm.original_title">
    </div>
  </div>
</template>

<script>
import LangFlag from 'vue-lang-code-flags'

export default {
  name: 'FlixCard',
  props: {
    dataFilm: Object
  },
  components: {
    LangFlag
  }
}
</script>

<style scoped>
  .card{
    background-color: black;
    color: white;
  }
</style>

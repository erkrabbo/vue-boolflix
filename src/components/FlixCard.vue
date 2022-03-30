<template>
  <div class="col">
    <div class="card align-items-center h-100">
      <h2 v-if="dataFilm.name != dataFilm.original_name">{{dataFilm.name}}</h2>
      <h2>{{dataFilm.original_name}}</h2>
      <h2 v-if="dataFilm.title != dataFilm.original_title">{{dataFilm.title}}</h2>
      <h2>{{dataFilm.original_title}}</h2>
      <lang-flag :iso="dataFilm.original_language" />
      <!-- <h3>{{dataFilm.original_language}}</h3> -->
      <div>
        <span v-for="(stars, index) in averageStars(dataFilm.vote_average)" :key="index">s</span>
        <span v-for="(stars,index) in (5 - averageStars(dataFilm.vote_average))" :key="index">v</span>
      </div>
      <img v-if="dataFilm.poster_path != null" class="card-img" :src="'https://image.tmdb.org/t/p/original/' + dataFilm.poster_path" :alt="dataFilm.original_title">
      <img v-else class="card-img" src="https://wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg" alt="image not found">
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
  },
  methods: {
    averageStars (num) {
      const avg = Math.floor(num / 10 * 5)
      return avg
    }
  }
}
</script>

<style scoped>
  .card{
    background-color: black;
    color: white;
  }
</style>

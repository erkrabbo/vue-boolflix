<template>
  <div class="container">
    <div class="row row-cols-5 g-2">
      <flix-card v-for="film in dataFilmList" :key="film.id" :dataFilm="film"/>
    </div>
  </div>
</template>

<script>
import FlixCard from './FlixCard.vue'

export default {
  name: 'FlixSearchMain',
  components: {
    FlixCard
  },
  props: {
    dataFilmList: Array
  }
}
</script>

<style scoped>
</style>

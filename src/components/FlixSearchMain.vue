<template>
  <div class="container">
    <div v-if="searched && dataFilmList.length || dataTvList.length" class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 p-4 g-4">
      <p v-if="dataFilmList.length" class="w-100">Films:</p>
      <flix-card v-for="film in dataFilmList" :key="film.id" :dataFilm="film"/>
      <p v-if="dataTvList.length" class="w-100">Series:</p>
      <flix-card v-for="tv in dataTvList" :key="tv.id" :dataFilm="tv" />
    </div>
    <div v-else-if="searched && (!dataFilmList.length && !dataTvList.length)">
      no results
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
    dataFilmList: Array,
    dataTvList: Array,
    searched: Boolean
  }
}
</script>

<style scoped>
.container{
  height: 100%;
}
</style>

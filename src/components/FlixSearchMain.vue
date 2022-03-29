<template>
  <div class="container">
    <div v-if="!searched && dataFilmList.length || dataTvList.length" class="row row-cols-5 p-2 g-2 h-100">
      <p v-if="dataFilmList.length" class="w-100">Films:</p>
      <flix-card v-for="film in dataFilmList" :key="film.id" :dataFilm="film"/>
      <p v-if="dataTvList.length" class="w-100">Series:</p>
      <flix-card v-for="tv in dataTvList" :key="tv.id" :dataFilm="tv" />
    </div>
    <div v-if="searched && (!dataFilmList.length || !dataTvList.length)">
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
  height: 96%;
}
.row{
  overflow: auto;
}

::-moz-scrollbar{
  width: 5px;
}
/* width */
::-webkit-scrollbar {
  width: 5px;
  cursor: pointer;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: darkgrey;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: lightgrey;
}
</style>

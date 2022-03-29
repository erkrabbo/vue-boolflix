<template>
  <div id="app">
    <flix-header @searchRequest="apiRequest($event)"/>
    <flix-search-main :dataFilmList="filmList" />
  </div>
</template>

<script>
import FlixHeader from './components/FlixHeader.vue'
import FlixSearchMain from './components/FlixSearchMain.vue'
import axios from 'axios'

export default {
  name: 'App',
  data () {
    return {
      filmList: null
    }
  },
  components: {
    FlixHeader,
    FlixSearchMain
  },
  methods: {
    apiRequest (searchStr) {
      console.log(searchStr)
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=4f1f1247800f9e15eb8e848040bd46aa&query=${searchStr}`)
        .then(result => {
          this.filmList = [...result.data.results]
          console.log(this.filmList)
        })
    }
  }
}
</script>

<style lang="scss">
  @import "../node_modules/bootstrap/scss/bootstrap";
</style>

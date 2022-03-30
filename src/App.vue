<template>
  <div id="app">
    <flix-header @searchRequest="apiRequest($event)"/>
    <main class="p-2">
      <flix-search-main :dataFilmList="filmList" :dataTvList="tvList" :searched="searched"/>
    </main>
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
      filmList: [],
      tvList: [],
      searched: false
    }
  },
  components: {
    FlixHeader,
    FlixSearchMain
  },
  methods: {
    apiRequest (searchStr) {
      if (searchStr.length) {
        console.log(searchStr)
        axios.get('https://api.themoviedb.org/3/search/movie', {
          params: {
            language: 'it-IT',
            api_key: '4f1f1247800f9e15eb8e848040bd46aa',
            query: searchStr
          }
        })
          .then(result => {
            this.filmList = [...result.data.results]
          })
        axios.get('https://api.themoviedb.org/3/search/tv', {
          params: {
            language: 'it-IT',
            api_key: '4f1f1247800f9e15eb8e848040bd46aa',
            query: searchStr
          }
        })
          .then(result => {
            this.tvList = [...result.data.results]
          })
        setTimeout(() => {
          this.searched = true
        }, 500)
      }
    }
  }
}
</script>

<style lang="scss">
  @import "../node_modules/bootstrap/scss/bootstrap";
  #app{
    height: 100vh;
    overflow: hidden;
  }
  main{
    height: calc(100% - 40px);
    background-color: grey;
    overflow-y: auto;
  }
</style>

<template>
  <v-app>
   <flix-header @searchRequest="apiRequest($event)"/>
    <main class="p-2">
      <v-select v-model="sel" name="genres" :rounded="true" single-line placeholder="Filtra per genere:" background-color="white" chips deletable-chips :items="genresList.map(ele => ele.name)"></v-select>
      <flix-search-main :dataFilmList="filteredFilmList" :dataTvList="filteredTvList" :searched="searched"/>
    </main>
  </v-app>
</template>

<script>
import FlixHeader from './components/FlixHeader.vue'
import FlixSearchMain from './components/FlixSearchMain.vue'
import axios from 'axios'

export default {
  name: 'App',
  data () {
    return {
      sel: null,
      genresList: [],
      filmList: [],
      tvList: [],
      searched: false
    }
  },
  components: {
    FlixHeader,
    FlixSearchMain
  },
  computed: {
    filteredFilmList () {
      if (this.sel != null) {
        const sele = this.genresList.filter(ele => ele.name === this.sel)
        // console.log(sele[0].id)
        const ab = this.filmList.filter(ele => ele.genre_ids.includes(sele[0].id))
        return ab
      } else {
        return [...this.filmList]
      }
    },
    filteredTvList () {
      if (this.sel != null) {
        const sele = this.genresList.filter(ele => ele.name === this.sel)
        console.log(this.sel)
        const ab = this.tvList.filter(ele => ele.genre_ids.includes(sele[0].id))
        return ab
      } else {
        return [...this.tvList]
      }
    }
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
    // cons ($event) {
    //   const sel = this.genresList.filter(ele => ele.name === $event)
    //   console.log(this.filmList)
    //   this.filteredFilmList = this.filmList.filter(ele => ele.genre_ids.includes(sel[0].id))
    //   this.filteredTvList = this.tvList.filter(ele => ele.genre_ids.includes(sel[0].id))
    //   console.log(sel[0].id)
    // console.log(this.filmList[0].genre_ids)
    // console.log(this.reactiveGetter[0].genre_ids)
    // }
  },
  created () {
    axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=4f1f1247800f9e15eb8e848040bd46aa&language=it-IT')
      .then(res => res.data.genres.forEach(element => {
        this.genresList.push(element)
      }))
  }
}
</script>

<style lang="scss">
  @import "../node_modules/bootstrap/scss/bootstrap";
  @import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css';
  #app{
    height: 100vh;
    overflow: hidden;
  }
  main{
    height: calc(100% - 40px);
    background-color: grey;
    overflow-y: auto;
  }
  .ps{
    height: 100%;
  }
</style>

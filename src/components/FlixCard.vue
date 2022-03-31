<template>
  <div class="col">
    <v-card href="https://www.youtube.com/watch?v=HmZm8vNHBSU" class="card align-items-center h-100">
      <div class="flip-card-back p-1">
        <ul class="list-unstyled">
          <li v-if="dataFilm.name != dataFilm.original_name">{{dataFilm.name}}</li>
          <li>{{dataFilm.original_name}}</li>
          <li v-if="dataFilm.title != dataFilm.original_title">{{dataFilm.title}}</li>
          <li>{{dataFilm.original_title}}</li>
          <li>
            <lang-flag :iso="dataFilm.original_language" :class="'flag-icon flag-icon-'+ dataFilm.original_language" :squared=false :alt="dataFilm.original_language" />
          </li>
          <li class="d-flex justify-content-center">
            <font-awesome-icon v-for="(stars, index) in averageStars(dataFilm.vote_average)" :key="index" icon="star" />
            <font-awesome-icon v-for="(stars,index) in (5 - averageStars(dataFilm.vote_average))" :key="index + 1000" icon="fa-regular fa-star" />
          </li>
          <li>{{ dataFilm.overview }}</li>
        </ul>
      </div>
      <div class="flip-card-front">
        <img v-if="dataFilm.poster_path != null" class="card-img" :src="'https://image.tmdb.org/t/p/w342/' + dataFilm.poster_path" :alt="dataFilm.original_title">
        <img v-else class="card-img" src="https://wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg" alt="image not found">
      </div>
    </v-card>
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

<style scoped lang="scss">
  .card{
    background-color: black;
    color: white;
  }
  .col {
    background-color: transparent;
    min-height: 300px;
    perspective: 500px;
  }

  .card {
    position: relative;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  }

  .col:hover .card {
    transform: rotateY(180deg);
  }

  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform: rotateX(0deg)
  }

  .flip-card-front {
    background-color: black;
    color: black;
    display: flex;
    img{
      object-fit: contain;
      max-height: 100%;
    }
  }

  .flip-card-back {
    background-color: #2980b9;
    color: white;
    transform: rotateY(180deg);
    overflow: auto;
    z-index: -1;
  }
</style>

<template>
  <div class="col">
    <div class="card align-items-center h-100">
      <div class="flip-card-back">
        <PerfectScrollbar>
          <ul class="list-unstyled">
            <li v-if="dataFilm.name != dataFilm.original_name">{{dataFilm.name}}</li>
            <li>{{dataFilm.original_name}}</li>
            <li v-if="dataFilm.title != dataFilm.original_title">{{dataFilm.title}}</li>
            <li>{{dataFilm.original_title}}</li>
            <li><lang-flag :iso="dataFilm.original_language" /></li>
            <li class="d-flex justify-content-center">
              <span v-for="(stars, index) in averageStars(dataFilm.vote_average)" :key="index">s</span>
              <span v-for="(stars,index) in (5 - averageStars(dataFilm.vote_average))" :key="index + 1000">v</span>
            </li>
            <li>{{ dataFilm.overview }}</li>
          </ul>
        </PerfectScrollbar>
        <!-- <p v-if="dataFilm.name != dataFilm.original_name">{{dataFilm.name}}</p>
        <p>{{dataFilm.original_name}}</p>
        <p v-if="dataFilm.title != dataFilm.original_title">{{dataFilm.title}}</p>
        <p>{{dataFilm.original_title}}</p>
        <lang-flag :iso="dataFilm.original_language" /> -->
                        <!-- <h3>{{dataFilm.original_language}}</h3> -->
        <!-- <div>
          <span v-for="(stars, index) in averageStars(dataFilm.vote_average)" :key="index">s</span>
          <span v-for="(stars,index) in (5 - averageStars(dataFilm.vote_average))" :key="index">v</span>
        </div>
        <p>{{ dataFilm.overview }}</p> -->
      </div>
      <div class="flip-card-front">
        <img v-if="dataFilm.poster_path != null" class="card-img" :src="'https://image.tmdb.org/t/p/original/' + dataFilm.poster_path" :alt="dataFilm.original_title">
        <img v-else class="card-img" src="https://wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg" alt="image not found">
      </div>
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
  // .col:hover .flip-card-back{
  //   z-index: 2;
  // }
  // .col:hover .flip-card-front{
  //   z-index: -1;
  // }

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

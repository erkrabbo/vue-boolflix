<template>
  <form class="input-group" @submit.prevent ="searchRequest(searchStr)">
    <input class="form-control" type="text" placeholder="Cerca un film..." v-model="searchStr">
    <button class="btn btn-danger" type="submit">Cerca</button>
  </form>
</template>

<script>
export default {
  name: 'MovieInputSearch',
  data () {
    return {
      searchStr: ''
    }
  },
  methods: {
    searchRequest (searchStr) {
      this.$emit('searchRequest', searchStr)
    }
  }
}
</script>

<style scoped lang="scss">
  form{
    max-width: 300px;
    align-items: center;
    input, button{
      height: 1.5rem;
      line-height: 1;
      vertical-align: center;
      padding: .2em;
    }
  }
</style>

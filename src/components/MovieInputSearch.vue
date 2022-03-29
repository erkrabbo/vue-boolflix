<template>
  <form @submit.prevent ="searchRequest(searchStr)">
    <input type="text" placeholder="Cerca un film..." v-model="searchStr">
    <button type="submit">Cerca</button>
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

<style scoped>
</style>

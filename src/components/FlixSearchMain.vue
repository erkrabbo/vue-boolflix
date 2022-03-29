<template>
  <div class="container">
    <div class="row row-cols-5">
      <flix-card />
    </div>
  </div>
</template>

<script>
import FlixCard from './FlixCard.vue'

export default {
  name: 'FlixSearchMain',
  components: {
    FlixCard
  }
}
</script>

<style scoped>
</style>

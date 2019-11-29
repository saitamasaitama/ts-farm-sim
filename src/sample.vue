<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () =>({ 
      greeting: 'Hello'
  })
})
</script>


<style scoped>
  p {
    font-size: 2em;
    text-align: center;
  }
</style>

<template>
  <div>
    {{ greeting }} 
    World!
  </div>
</template>



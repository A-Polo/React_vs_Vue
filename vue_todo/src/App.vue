<template>
  <ToDo />
</template>

<script>
import ToDo from './components/ToDo.vue'

export default {
  name: 'app',
  components: {
    ToDo
  }
}
</script>

<style>
  html,body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif;
  }
</style>

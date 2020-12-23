<template>
  <div>
    <Search/>
    <Grid/>
  </div>

</template>

<script>
import Search from './components/Search.vue'
import Grid from './components/Grid.vue'

export default {
  name: 'App',
  components: {
    Search,
    Grid
  }
}
</script>

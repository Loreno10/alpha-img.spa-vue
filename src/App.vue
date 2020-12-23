<template>
  <div class="app-container">
    <Search @search-images="searchRequested" />
    <Grid :images="images" />
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import Grid from "./components/Grid.vue";
import { getImages } from "./services/google-images-service.js";

export default {
  name: "App",
  data() {
    return {
      images: [],
    };
  },
  methods: {
    async searchRequested(searchTerm) {
      const results = await Promise.all([getImages(searchTerm), getImages(searchTerm, 11)])
      console.log(results)
      this.images = [...results[0].images, ...results[1].images]
    },
  },
  components: {
    Search,
    Grid,
  },
};
</script>

<style scoped>
.app-container {
  height: 100%;
  width: 100%;
}
</style>

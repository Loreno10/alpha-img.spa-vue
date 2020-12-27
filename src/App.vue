<template>
  <div class="app-container">
    <Search @search-images="searchRequested" />
    <div><Grid :images="images" /></div>
    <Pagination
      v-if="images.length > 0"
      :disablePrevious="searchIndex === 1"
      @previous-clicked="searchPrevious"
      @next-clicked="searchNext"
    />
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import Grid from "./components/Grid.vue";
import Pagination from "./components/Pagination.vue";
import { getImages } from "./services/google-images-service.js";

export default {
  name: "App",
  data() {
    return {
      images: [],
      searchTerm: "",
      searchIndex: 1,
    };
  },
  methods: {
    async searchRequested(searchTerm) {
      if (searchTerm !== undefined) {
        this.searchTerm = searchTerm;
      }
      this.images = await getImages(this.searchTerm, this.searchIndex)
      console.log(this.images)
    },
    async searchPrevious() {
      if (this.searchIndex > 0) {
        this.searchIndex--
      }
      await this.searchRequested()
    },
    async searchNext() {
      this.searchIndex++
      await this.searchRequested()
    },
  },
  components: {
    Search,
    Grid,
    Pagination,
  },
};
</script>

<style scoped>
.app-container {
  height: 100%;

  margin: 0 10%;

  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  grid-template-columns: 1fr;
  gap: 50px 50px;
}
</style>

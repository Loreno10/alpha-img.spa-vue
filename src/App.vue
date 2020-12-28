<template>
  <div class="app-container">
    <Search @search-images="searchRequested" class="search"/>
    <Grid :images="images" class="grid" style="overflow: auto;"/>
    <Pagination
      v-if="images.length > 0"
      :disablePrevious="searchIndex === 1"
      @previous-clicked="searchPrevious"
      @next-clicked="searchNext"
      class="pagination"
    />
  </div>
</template>

<script>
/* eslint-disable */
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

  /* display: grid;
  grid-template-rows: auto auto auto;
  grid-template-columns: 1fr; */

  display: flex;
  flex-direction: column;
}

.grid {
  flex: 1;
}

.pagination {
  margin: 1em 0;
}
</style>

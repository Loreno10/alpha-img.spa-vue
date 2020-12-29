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
    }
  },
  methods: {
    async searchRequested(searchTerm) {
      if (searchTerm !== undefined) {
        this.searchTerm = searchTerm
      }
      this.images = await getImages(this.searchTerm, this.searchIndex)
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
  padding: 0 10%;

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

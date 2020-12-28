<template>
  <div class="container">
    <input type="text" class="search-input" v-model="searchTerm" />
    <button @click="$emit('search-images', searchTerm)">Search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: "",
    };
  }
};
</script>

<style scoped>
.container {
  display: flex;
  margin: 2em 0;
  height: 2em;
  box-sizing: content-box;
}

.search-input {
  flex: 1;
  margin-right: 10px;
}
</style>
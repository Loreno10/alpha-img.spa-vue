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
  padding: 20px;
}

.search-input {
  flex: 1;
  margin-right: 10px;
}
</style>
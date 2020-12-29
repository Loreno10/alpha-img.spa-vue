<template>
  <div class="container">
    <input type="text" class="search-input" v-model="searchTerm" @keyup.enter="search"/>
    <button @click="search">Search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: "",
    };
  },
  methods: {
    search() {
      this.$emit('search-images', this.searchTerm)
    }
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
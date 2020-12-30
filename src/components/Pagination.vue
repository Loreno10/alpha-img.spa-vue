<template>
  <div class="pagination-container">
    <button :disabled="disablePrevious" @click="$emit('previous-clicked')">
      <font-awesome-icon icon="arrow-circle-left" size="4x"/>
    </button>
    <button @click="$emit('next-clicked')">
      <font-awesome-icon icon="arrow-circle-right" size="4x"/>
    </button>
  </div>
</template>

<script>
export default {
  props: ["disablePrevious"],
};
</script>

<style scoped>
.pagination-container {
  display: flex;
  justify-content: center;
}

button {
  margin: 0 2em;
  padding: 0.25em 2em;
}
</style>
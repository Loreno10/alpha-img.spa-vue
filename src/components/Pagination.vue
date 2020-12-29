<template>
  <div class="pagination-container">
    <button :disabled="disablePrevious" @click="$emit('previous-clicked')">
      <font-awesome-icon icon="arrow-alt-circle-left" />
    </button>
    <button @click="$emit('next-clicked')">
      <font-awesome-icon icon="arrow-alt-circle-right" />
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
</style>
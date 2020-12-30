<template>
  <div class="pagination-container">
    <button :disabled="disabled" @click="$emit('previous-clicked')">
      <font-awesome-icon v-if="direction === 'previous'" icon="arrow-circle-left" size="4x"/>
      <font-awesome-icon v-if="direction === 'next'" icon="arrow-circle-right" size="4x"/>
    </button>
  </div>
</template>

<script>
export default {
  props: ["disabled", "direction"]
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
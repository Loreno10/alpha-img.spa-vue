<template>
  <div class="img-container">
    <img :src="image.thumbnailUrl" :alt="image.title" />
    <div class="buttons">
      <button>Preview</button>
      <button>Download</button>
      <button>Copy</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["image"],
};
</script>

<style scoped>
.img-container {
  display: flex;
  flex-direction: column;
}

.buttons {
  display: flex;
  justify-content: space-around;

  margin-top: 10px;
}

.button {
  flex: 1;
}
</style>
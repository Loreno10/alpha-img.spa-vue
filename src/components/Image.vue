<template>
  <div class="main-container">
    <div class="img-container" @click="openModal">
      <img :src="image.thumbnailUrl" :alt="image.title" />
    </div>
    <div class="size-container">
      x: <span class="size">{{ image.width }}px</span> y:
      <span class="size">{{ image.height }}px</span>
    </div>
    <div class="buttons-container">
      <button @click="openModal"><font-awesome-icon icon="eye" /></button>
      <a :href="image.imageUrl" target="_blank" class="download-a">
        <button><font-awesome-icon icon="save" /></button>
      </a>
      <button @click="copyImage"><font-awesome-icon icon="clipboard" /></button>
    </div>
  </div>
</template>

<script>
import { copyToClipboard } from "../services/clipboard-service.js";
import { openModal } from "../services/modal-manager.js";

export default {
  props: ["image"],
  methods: {
    async copyImage() {
      await copyToClipboard(this.image.imageUrl);
    },
    openModal() {
      openModal(this.image.imageUrl);
    },
  },
};
</script>

<style scoped>
.main-container {
  min-width: 10em;

  margin-right: 2em;
  margin-bottom: 3em;
  border: 1px solid rgb(219, 219, 219);
  padding: 2px;
}

.img-container {
  height: 10em;

  display: flex;
  justify-content: center;
  align-items: center;
}

.size-container {
  margin-top: 0.5em;
  text-align: center;
}

.buttons-container {
  height: 2em;
  display: flex;
  justify-content: center;

  margin-top: 1em;
}

.size {
  font-weight: bold;
}

.download-a {
  display: block;
  margin: 0 1em;
}

.download-a > button {
  height: 100%;
  width: 100%;
}
</style>
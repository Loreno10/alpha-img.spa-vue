<template>
  <div class="main-container">
    <div class="img-container" style="background: yellow;">
      <img :src="image.thumbnailUrl" :alt="image.title" />
    </div>
    <div class="size-container">
      x: <span class="size">{{image.width}}px</span> y: <span class="size">{{image.height}}px</span>
    </div>
    <div class="buttons-container">
      <button><font-awesome-icon icon="eye" /></button>
      <button><font-awesome-icon icon="save" /></button>
      <button><font-awesome-icon icon="clipboard" /></button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["image"],
};
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.img-container {
  flex: 7;
  
  /* display: flex;
  justify-content: center;
  align-items: center; */
}

img {
  max-width: 100%;
  max-height: 100%;
  display: block; 
  /* max-height: 100%;
  max-width: 100%; */
}

.size-container {
  flex: 1;
}

.buttons-container {
  flex: 2;
  display: flex;
  justify-content: space-around;

  /* margin-top: 10px; */
}

.size {
  font-weight: bold;
}
</style>
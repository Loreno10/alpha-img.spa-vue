<template>
  <div class="main-container">
    <div class="img-container">
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
  /* display: flex; */
  /* flex-direction: column; */
  /* height: 100%; */
  /* width: 20%; */
  min-width: 10em;

  margin-right: 2em;
  margin-bottom: 3em;
  /* height: 10%; */
  border: 1px solid rgb(219, 219, 219);
  padding: 2px;
}

.img-container {
  /* flex: 7; */
  /* min-height: 0; */
  height: 10em;

  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  /* flex: 7; */
  /* min-height: 0; */
  /* display: block; */
  /* max-width: 100%; */
  /* max-height: 100%; */
}

.size-container {
  margin-top: 0.5em;
  text-align: center;
  /* flex: 1; */
}

.buttons-container {
  /* flex: 2; */
  height: 2em;
  display: flex;
  justify-content: center;

  margin-top: 1em;
}

button:nth-child(2) {
  margin: 0 1em;
}

.size {
  font-weight: bold;
}
</style>
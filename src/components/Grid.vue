<template>
  <div class="container">
    <Image v-for="img in images" :key="img.imageUrl" :image="img"></Image>
  </div>
</template>

<script>
import Image from "./Image.vue";

export default {
  props: ["images"],
  components: {
    Image
  },
};
</script>

<style scoped>
.container {
  height: 100%;
  margin: 0 10px;

  display: flex;
  flex-wrap: wrap;
}
</style>

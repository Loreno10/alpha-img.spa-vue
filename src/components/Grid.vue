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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 20px 20px;
  justify-items: center;
}
</style>

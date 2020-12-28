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
/* 
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 20%);
  gap: 20px;
  justify-items: center; */

  display: flex;
  flex-wrap: wrap;
}
</style>

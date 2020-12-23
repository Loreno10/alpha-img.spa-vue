<template>
  <div class="container">
    <div><img src="../assets/logo.png" /></div>
    <div><img src="../assets/logo.png" /></div>
    <div><img src="../assets/logo.png" /></div>
    <div><img src="../assets/logo.png" /></div>
    <div><img src="../assets/logo.png" /></div>
    <div><img src="../assets/logo.png" /></div>
    <div><img src="../assets/logo.png" /></div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(10, 200px);
  gap: 20px 20px;
  justify-items: center;
}
</style>

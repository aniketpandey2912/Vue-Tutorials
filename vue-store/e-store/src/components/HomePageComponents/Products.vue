<template>
  <div id="products">
    <h3>This is Products Component</h3>
  </div>
</template>
<script setup>
import productsData from "../../data/products.json";
console.log(productsData);
</script>
<style scoped>
#products {
  margin-top: 3%;
}
</style>

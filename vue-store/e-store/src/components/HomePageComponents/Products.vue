<template>
  <div id="products">
    <div id="individual_product" v-for="element in products">
      <!-- :src is data binding technique to attributes -->
      <img :src="element.image" :alt="element.title" />
      <p>{{ element.title }}</p>
      <p>{{ element.price }}</p>
    </div>
  </div>
</template>
<script setup>
import productsData from "../../data/products.json";
console.log(productsData);
const products = productsData;
</script>
<style scoped>
#products {
  margin-top: 3%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 3%;
  grid-gap: 3%;
}

#products img {
  width: 60%;
  height: 200px;
}

#individual_product {
  background-color: rgb(234, 230, 230);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 10px;
}
</style>

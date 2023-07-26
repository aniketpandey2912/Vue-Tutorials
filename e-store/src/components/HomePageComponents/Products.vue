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
import axios from "axios";
import { ref, onMounted } from "vue";
import productsData from "../../data/products.json";
// console.log(productsData);
// const products = productsData;

// API call should be made after component is MOUNTED
let products = ref([]);
onMounted(async () => {
  // USING Fetch
  // let response = await fetch("https://fakestoreapi.com/products");
  // let data = await response.json();
  // console.log("data:", data);
  // products.value = data;

  // Using AXIOS
  let response = await axios.get("https://fakestoreapi.com/products");
  // console.log("response:", response);
  products.value = response.data;
});
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

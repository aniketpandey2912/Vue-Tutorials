<template>
  <div>
    <h1>Product Details</h1>
    <div id="individual_product">
      <!-- :src is data binding technique to attributes -->
      <img :src="product.imageUrl" :alt="product.name" />
      <p>{{ product.name }}</p>
      <p>{{ product.price }}</p>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { db, doc, getDoc } from "../../firebase.js";
import { useRoute } from "vue-router";

const route = useRoute();

let product = ref({});
onMounted(async () => {
  const docRef = doc(db, "products", route.params.prodID);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    product.value = docSnap.data();
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }

  console.log(product);
});
</script>
<style scoped>
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

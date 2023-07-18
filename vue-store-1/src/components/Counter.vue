<template>
  <div>
    <h1>Counter : {{ count }}</h1>
    <div>
      <button @click="decrement()">DEC</button>
      <button @click="increment()">INC</button>
      <button @click="reset()">RESET</button>
    </div>
  </div>
</template>

<!-- This way of writing script is COMPOSITION API - Modern way -->
<!-- <script setup>
// to make variables reactive, we need "ref"
import { ref } from "vue";

let count = ref(0);
console.log(count);

const increment = () => {
  count.value++;
  console.log(count);
};

const decrement = () => {
  count.value--;
  console.log(count);
};

const reset = () => {
  count.value = 0;
  console.log(count);
};
</script> -->



<style scoped>
button {
  cursor: pointer;
}
</style>

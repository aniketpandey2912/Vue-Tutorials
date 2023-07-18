<template>
  <div>
    <!-- Hello World Example -->
    <!-- Pass the properties dynamically -->
    <HelloWorld msg="Hello World ! Welcome to Vue" />

    <!-- Counter Example -->
    <Counter />
  </div>
</template>

<script setup>
import HelloWorld from "../src/components/HelloWorld.vue";
import Counter from "../src/components/Counter.vue";
console.log("HelloWorld:", HelloWorld);
console.log("Counter:", Counter);
</script>

<style scoped></style>

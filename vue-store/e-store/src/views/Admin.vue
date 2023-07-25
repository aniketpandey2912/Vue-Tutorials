<template>
  <div>
    <NavbarComponent />
    <h4>This is Admin Page</h4>
    <input type="text" v-model="name" />
    <input type="number" v-model="contact" />
    {{ name }}
  </div>
</template>
<script setup>
import { ref } from "vue";

import NavbarComponent from "../components/HomePageComponents/Navbar.vue";

const name = ref("");
const contact = ref(0);
</script>
<style scoped></style>

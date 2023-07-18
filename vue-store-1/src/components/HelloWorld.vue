<template>
    <div>
      <h1>{{msg || "Hello Pass the msg" }}</h1>
    </div>
  </template>
  
  
  <script setup>
    // Read the properties being passed to this component
    defineProps(["msg"])
</script>
  
  <style scoped></style>
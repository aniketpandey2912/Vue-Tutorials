<template lang="">
  <div>
    <div id="navbar">
      <div id="lhs">Home</div>
      <div id="rhs">
        <div>Account</div>
        <div id="cart">
          <div id="cart_count">1</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
#navbar {
  display: flex;
  height: 70px;
  align-items: center;
  font-size: 130%;
  border-bottom: 1px solid black;
}

#lhs {
  display: flex;
  flex: 3;
  align-items: center;
}

#rhs {
  display: flex;
  flex: 7;
  align-items: center;
  justify-content: flex-end;
  gap: 10%;
}
</style>

<template>
  <div id="cart_popup">
    <q-dialog v-model="dialog" position="right">
      <q-card id="cart_card" style="width: 350px">
        <q-card-section>
          <div>
            <h4>Recently Added Items</h4>
          </div>

          <q-space />

          <div id="cart_products" v-for="item in 3">
            <div id="cart_product">
              <div id="lhs">LHS - Image</div>
              <div id="rhs">RHS - Name, Price</div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>
<script setup>
import { ref } from "vue";

const dialog = ref(true);
</script>
<style scoped>
#cart_card {
  height: 900px;
  margin-top: 10%;
}

#cart_product {
  display: flex;
}

#cart_product div {
  border: 1px solid black;
  margin-top: 4%;
}

#lhs {
  display: flex;
  flex: 6;
}

#rhs {
  display: flex;
  flex: 4;
}
</style>

import { defineStore } from "pinia";
import { ref } from "vue";

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useCartStore = defineStore("cart", () => {
  const cart = ref([]);
  const cartCount = ref(cart.value.length);

  // Actions : functions to manipulate store data
  const addToCart = (product) => {
    console.log("Adding Product to Cart is:", product);
    cart.value.push(product);
    cartCount.value = cart.value.length;
  };

  return { cart, cartCount, addToCart };
});

<template>
  <Navbar />
  <Cart />
  <Products />
</template>

<script>
import Navbar from '@/components/sweet_options/Navbar.vue';
import Cart from '@/components/sweet_options/Cart.vue';
import Products from '@/components/sweet_options/Products.vue';

export default {
  components: {
    Navbar,
    Cart,
    Products,
  },
};
</script>

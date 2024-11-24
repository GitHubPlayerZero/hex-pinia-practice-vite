<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="navbar bg-light">
    <div class="container-fluid">
      <span class="navbar-brand" href="#">香香麵攤</span>
      <button type="button" class="btn nav-link">
        購物車
        <span class="badge rounded-pill bg-danger text-white">{{ cartStore.cart.length }}</span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { useCartStore } from '@/stores/sweet/cartStore';
const cartStore = useCartStore();
// console.log(`cartStore ==>`, cartStore);
</script>

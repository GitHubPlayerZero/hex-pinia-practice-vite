<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="row row-cols-3 g-4 my-3">
    <!-- 產品迴圈 -->
    <div class="col" v-for="product in productStore.sortedProducts" :key="product.id">
      <div class="card">
        <!-- 圖片 -->
        <img :src="product.imageUrl" class="card-img-top" :alt="product.title" />

        <div class="card-body">
          <!-- 名稱 -->
          <h6 class="card-title">
            {{ product.title }}
            <span class="float-end">$ {{ product.price }}</span>
          </h6>

          <!-- 加入購物車 -->
          <a
            href="#"
            class="btn btn-outline-primary w-100"
            @click.prevent="cartStore.add(product.id)"
            >加入購物車</a
          >
        </div>
      </div>
    </div>
    <!-- 產品迴圈 - end -->
  </div>
</template>

<script setup>
import { useProductStore } from '@/stores/sweet/productStore';
import { useCartStore } from '@/stores/sweet/cartStore';
const productStore = useProductStore();
const cartStore = useCartStore();
</script>

<style scoped>
.card-img-top {
  object-fit: cover;
  height: 200px;
}
</style>

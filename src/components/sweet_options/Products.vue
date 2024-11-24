<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="row row-cols-3 g-4 my-3">
    <div class="col" v-for="product in sortedProducts" :key="product.id">
      <div class="card">
        <img
          :src="product.imageUrl"
          class="card-img-top"
          :alt="product.title"
        />
        <div class="card-body">
          <h6 class="card-title">
            {{ product.title }}
            <span class="float-end">$ {{ product.price }}</span>
          </h6>
          <a href="#" class="btn btn-outline-primary w-100" @click.prevent="add(product.id)">加入購物車</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useProductStore } from '@/stores/sweet/productStore';
import { useCartStore } from '@/stores/sweet/cartStore';

// const productStore = useProductStore();
// console.log(productStore);

export default {
  methods: {
    ...mapActions(useCartStore, ["add"]),
  },
  computed: {
    ...mapState(useProductStore, ["sortedProducts"]),
  },
};
</script>

<style scoped>
.card-img-top {
  object-fit: cover;
  height: 200px;
}
</style>

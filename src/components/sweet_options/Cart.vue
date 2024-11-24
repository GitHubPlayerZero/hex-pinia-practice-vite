<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="bg-light p-4 my-4">
    <div v-if="cartInfo.cartDetail.length <= 0">購物車沒有任何品項</div>
    <table class="table align-middle" v-else>
      <tbody>
        <!-- 購物車資料迴圈 -->
        <tr v-for="item in cartInfo.cartDetail" :key="item.id">
          <!-- 刪除 -->
          <td width="100">
            <a href="#" class="text-dark" @click.prevent="remove(item.id)">
              <i class="fas fa-times"></i>
            </a>
          </td>
          <!-- 圖片 -->
          <td width="100">
            <img :src="item.product.imageUrl" class="table-image" :alt="item.product.title" />
          </td>
          <!-- 名稱 -->
          <td>{{ item.product.title }}</td>
          <!-- 數量 -->
          <td width="200">
            <select class="form-select" :value="item.qty" @change="setQuantity($event, item.id)">
              <!-- 另一種寫法 -->
              <!-- <select
              class="form-select"
              :value="item.qty"
              @change="
                (event) => {
                  setQuantity(event, item.id);
                }
              "
            > -->
              <option v-for="i in 20" :key="i" :value="i">{{ i }}</option>
            </select>
          </td>
          <!-- 小計 -->
          <td width="200" class="text-end">$ {{ item.subtotal }}</td>
        </tr>
        <!-- 購物車資料迴圈 - end -->
      </tbody>
      <tfoot>
        <!-- 總金額 -->
        <tr>
          <td colspan="5" class="text-end">總金額 NT$ {{ cartInfo.total }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useCartStore } from '@/stores/sweet/cartStore';

export default {
  methods: {
    ...mapActions(useCartStore, ['remove', 'setQuantity']),
  },
  computed: {
    ...mapState(useCartStore, ['cartInfo']),
  },
};
</script>

<style scoped>
.table-image {
  width: 75px;
  height: 75px;
  object-fit: cover;
}
</style>

<script>
import { useUserStore } from '@/stores/user';
import TheWelcome from '../components/TheWelcome.vue';

export default {
  data() {
    const userStore = useUserStore();
    console.log(`[data] userStore ==>`, userStore);

    return {
      name: userStore.name,
      wallet: userStore.wallet,
    };
  },

  components: {
    TheWelcome,
  },
};
</script>

<template>
  <main>
    <p>姓名：{{ name }}</p>
    <p>資產：{{ wallet }} 元</p>
    <hr class="mb-4">
    <TheWelcome />
  </main>
</template>

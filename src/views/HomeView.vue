<script>
import { useUserStore } from '@/stores/user';
import TheWelcome from '../components/TheWelcome.vue';

export default {
  data() {
    const userStore = useUserStore();
    console.log(`[data] userStore ==>`, userStore);

    return {
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
    <p>資產：{{ wallet }} 元</p>
    <TheWelcome />
  </main>
</template>

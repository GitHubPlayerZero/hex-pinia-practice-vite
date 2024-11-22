<template>
  <div>
    <h2>我是 PiniaTest</h2>
    <p>姓名：{{ name }}</p>
    <p>打招呼：{{ hello }}</p>
    <p>我現在有 {{ wallet }} 元</p>
    <p>我的薪水是 {{ salary }} 元</p>

    <br />

    <div>
      <button type="button" @click="receiveSalary">領薪水嘍</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useUserStore } from '@/stores/user';

export default {
  beforeCreate() {
    const userStore = useUserStore();
    console.log(`[beforeCreate] userStore ==>`, userStore);
  },

  computed: {
    // mapState 可以引用 store 的 state、getters
    ...mapState(useUserStore, ['name', 'wallet', 'salary', 'hello']),
  },

  methods: {
    // mapActions 可以引用 store 的 actions
    ...mapActions(useUserStore, ['receiveSalary']),
  },
};
</script>

import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
  // 相當於 Vue 的 Data
  state: () => {
    return {
      name: '王小明',
      wallet: 300,
      salary: 100,
    };
  },

  // 相當於 Vue 的 Computed
  getters: {
    hello: (state) => `你好～我是 ${state.name}～`,
  },

  // 相當於 Vue 的 Methods
  actions: {
    // 傳統函式可以使用 this
    receiveSalary() {
      this.wallet += this.salary;
    },
    
    // 可以提供給 Options API 使用，因為 Options API 寫法的關係，未必會建立 store 實例。
    // Composition API 則是會建立 store 實例來操作，因此可以在自己的程式中直接呼叫 $reset。
    reset() {
      this.$reset();
    },
  },
});

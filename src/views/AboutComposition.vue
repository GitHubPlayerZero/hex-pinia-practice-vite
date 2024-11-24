<template>
  <h2 class="mb-4">我是 About (Composition)</h2>
  
  <p>姓名：{{ userStore.name }} ({{ name }})</p>
  <p>打招呼：{{ userStore.hello }} ({{ hello }})</p>
  <p>我現在有 {{ userStore.wallet }} 元 ({{ wallet }})</p>
  <p>我的薪水是 {{ userStore.salary }} 元</p>

  <br />

  <div>
    <!-- 可以直接使用 userStore 裡的方法，也可以使用解構出來的方法 -->
    <!-- <button type="button" @click="userStore.receiveSalary">領薪水嘍</button>&nbsp;&nbsp; -->
    <button type="button" @click="receiveSalary">領薪水嘍</button>&nbsp;&nbsp;

    <button type="button" @click="pay">支出 $30</button>&nbsp;&nbsp;
    <button type="button" @click="increaseSalary">加薪 $50</button>&nbsp;&nbsp;

    <button type="button" @click="updateData">$patch 更改資料</button>&nbsp;&nbsp;
    <button type="button" @click="reset">$reset 還原</button>&nbsp;&nbsp;
  </div>
</template>

<script>
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user';

export default {
  setup() {
    const userStore = useUserStore();
    console.log(`userStore ==>`, userStore);

    // 直接解構會失去响應性，需要使用 storeToRefs
    const { name, wallet, hello } = storeToRefs(userStore);
    console.log(`name ==>`, name);
    console.log(`wallet ==>`, wallet);
    console.log(`hello ==>`, hello);

    const pay = () => {
      // 使用 storeToRefs 解構者會被包成 ObjectRefImpl，要使用 .value 取出裡面真正的值
      wallet.value -= 30;
    };

    // 方法不需要有响應性，因此直接解構即可
    const { receiveSalary } = userStore;

    // 也可以直接對 store 物件裡的屬性操作
    const increaseSalary = () => {
      userStore.salary += 50;
    };

    // $patch 用法
    function updateData() {
      userStore.$patch({
        name: '王大明',
        wallet: 888,
        salary: 666,
      });
    };
    
    // $reset 用法
    const reset = () => {
      userStore.$reset();
    };
    

    return {
      userStore,
      name,
      wallet,
      hello,
      receiveSalary,
      pay,
      increaseSalary,
      updateData,
      reset,
    };
  },
};
</script>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
import { useTitle } from '@/hooks';
import { onMounted, ref } from 'vue';

// 设置 document title
useTitle();

const msg = ref('Hello Vue 3 + TypeScript + Vite');

onMounted(() => {
  msg.value = 'Hello Vue 3 + TypeScript + Vite !!!';
});
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld :msg="msg" />
</template>

<style lang="scss">
#app {
  height: 100%;
  margin-top: 50px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  text-align: center;
}
</style>

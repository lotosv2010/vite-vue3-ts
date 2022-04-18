<script setup lang="ts">
import BasicLayout from '@/layouts/BasicLayout.vue';
import { useTitle } from '@/hooks';

// 设置 document title
useTitle();
</script>

<template>
  <BasicLayout />
</template>

<style lang="scss">
#app {
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  text-align: center;
}
</style>

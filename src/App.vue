<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
import { useTitle } from '@/hooks';
import { onMounted, ref } from 'vue';

// 设置 document title
useTitle();

const msg = ref('Hello Vue 3 + TypeScript + Vite');

onMounted(() => {
  msg.value = 'Hello Vue 3 + TypeScript + Vite !!!';
  fetch('/api/datav-res/datav/map.json')
    .then((res) => res.json())
    .then((data) => console.log(data));
});
</script>

<template>
  <header>Vue3 + vite</header>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld :msg="msg" />
</template>

<style lang="scss">
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  text-align: center;

  header {
    @include style(calc(10px + 2vmin), #ffffff);
    @include flexContainer();

    min-height: 60px;
    background-color: $bg;
  }

  img {
    height: 20vmin;
    pointer-events: none;
  }

  button {
    font-size: calc(10px + 1vmin);
  }
}
</style>

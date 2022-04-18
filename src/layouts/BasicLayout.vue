<script setup lang="ts">
// import { ref } from 'vue';
// const layout = ref('layout');
</script>

<template>
  <div class="layout">
    <header>LOGO</header>
    <p>
      <router-link to="/dashboard">dashboard</router-link>
      <router-link to="/home">home</router-link>
    </p>
    <img src="../assets/logo.png" />
    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">
.layout {
  height: 100%;

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

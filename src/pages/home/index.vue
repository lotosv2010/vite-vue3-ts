<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '@/stores';
import { getUserInfo } from '@/apis/home';

const home = ref('Home');
const store = useGlobalStore();
const { title, language } = storeToRefs(store);
</script>

<template>
  <div>
    <p>{{ home }}</p>
    <p>标题：{{ title }}</p>
    <p>语言：{{ language }}</p>
    <button @click="store.setTitle('Dep_App')">setTitle</button>
    <p><button @click="getUserInfo">mock</button></p>
  </div>
</template>

<style scoped lang="scss"></style>

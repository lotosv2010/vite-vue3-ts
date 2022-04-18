<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '@/stores';

const store = useGlobalStore();
const { title, language } = storeToRefs(store);
const dashboard = ref('Dashboard');

onMounted(() => {
  store.setLanguage('en');
  dashboard.value = 'Dashboard !!!';
  fetch('/api/datav-res/datav/map.json')
    .then((res) => res.json())
    .then((data) => console.log(data));
});
</script>

<template>
  <div>
    <p>{{ dashboard }}</p>
    <p>标题：{{ title }}</p>
    <p>语言：{{ language }}</p>
  </div>
</template>

<style scoped lang="scss"></style>

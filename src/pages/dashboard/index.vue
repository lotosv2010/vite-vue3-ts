<script setup lang="ts">
import { ref, onMounted } from 'vue';

const dashboard = ref('Dashboard');

onMounted(() => {
  dashboard.value = 'Dashboard !!!';
  fetch('/api/datav-res/datav/map.json')
    .then((res) => res.json())
    .then((data) => console.log(data));
});
</script>

<template>
  <div>{{ dashboard }}</div>
</template>

<style scoped lang="scss"></style>

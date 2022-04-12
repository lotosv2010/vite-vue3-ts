<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>
  <button type="button" @click="count++">count is: {{ count }}</button>
</template>

<style scoped lang="scss">
h1 {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}
</style>

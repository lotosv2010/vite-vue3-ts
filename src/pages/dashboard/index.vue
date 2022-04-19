<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '@/stores';
import { getMapData, getDashboardInfo } from '@/apis/dashboard';
import { useI18n } from 'vue-i18n';

const { locale, t } = useI18n({ useScope: 'global' });

const change = (type: string) => {
  locale.value = type; // change!
};

const store = useGlobalStore();
const { title, language } = storeToRefs(store);
const dashboard = ref('Dashboard');

const getMap = async () => {
  const data = await getMapData();
  console.log(data);
};

onMounted(() => {
  store.setLanguage('en');
  dashboard.value = 'Dashboard !!!';
});
</script>

<template>
  <div>
    <p>{{ dashboard }}</p>
    <p>标题：{{ title }}</p>
    <p>语言：{{ language }}</p>
    <p>
      语言切换测试：{{ t('欢迎使用 vue-i18n') }}
      <button @click="change('zh')">{{ t('切换到中文') }}</button>
      <button @click="change('en')">{{ t('切换到英文') }}</button>
      <button @click="change('ja')">{{ t('切换到日文') }}</button>
    </p>
    <p><button @click="getMap">axios</button></p>
    <p><button @click="getDashboardInfo">mock</button></p>
  </div>
</template>

<style scoped lang="scss"></style>

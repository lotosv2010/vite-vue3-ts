<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '@/stores';
import { getMapData, getDashboardInfo } from '@/apis/dashboard';
import { useI18n } from 'vue-i18n';
import { ElButton, ElIcon } from 'element-plus';
import { AlarmClock } from '@element-plus/icons-vue';
import { useTitle } from '@/hooks';

useTitle();

const { t } = useI18n({ useScope: 'global' });

const store = useGlobalStore();
const { title, language } = storeToRefs(store);
const dashboard = ref('Dashboard');

const getMap = async () => {
  const data = await getMapData({ name: 'test', age: 18 });
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
    <el-icon :size="50" color="red">
      <AlarmClock />
    </el-icon>
    <p>语言切换测试：{{ t('欢迎使用 vue-i18n') }}</p>
    <p><el-button type="warning" @click="getMap">axios</el-button></p>
    <p><el-button type="danger" @click="getDashboardInfo">mock</el-button></p>
  </div>
</template>

<style scoped lang="scss"></style>

<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useGlobalStore } from '@/stores';
import { getUserInfo } from '@/apis/home';
import { useI18n } from 'vue-i18n';
import { ElButton } from 'element-plus';

const { t } = useI18n({ useScope: 'global' });

const home = ref('Home');
const store = useGlobalStore();
const { title, language } = storeToRefs(store);
</script>

<template>
  <div>
    <p>{{ home }}</p>
    <p>标题：{{ title }}</p>
    <p>语言：{{ language }}</p>
    <p>语言切换测试：{{ t('欢迎使用 vue-i18n') }}</p>
    <el-button @click="store.setTitle('Dep_App')">setTitle</el-button>
    <p><el-button type="success" @click="getUserInfo">mock</el-button></p>
  </div>
</template>

<style scoped lang="scss"></style>

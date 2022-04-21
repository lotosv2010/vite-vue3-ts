<script setup lang="ts">
import { ref } from 'vue';
import {
  ElContainer,
  ElHeader,
  ElAside,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElSubMenu,
  ElIcon,
  ElScrollbar,
  ElSpace,
  ElAvatar,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
} from 'element-plus';
import { DataLine, HelpFilled, ArrowDown } from '@element-plus/icons-vue';
import { useI18n } from 'vue-i18n';

const { locale, t } = useI18n({ useScope: 'global' });

const change = (type: string) => {
  locale.value = type; // change!
};
const scrollbarHeight = ref('calc(100vh - 60px)');
// const fill = ref(true);
</script>

<template>
  <el-container class="layout">
    <el-header>
      <el-space>
        <span class="logo">LOGO</span>
      </el-space>
      <el-space alignment="center" :size="30">
        <el-dropdown>
          <span>切换语言</span>
          <el-icon><arrow-down /></el-icon>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="change('zh')">{{ t('切换到中文') }}</el-dropdown-item>
              <el-dropdown-item @click="change('en')">{{ t('切换到英文') }}</el-dropdown-item>
              <el-dropdown-item @click="change('ja')">{{ t('切换到日文') }}</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      </el-space>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-scrollbar :height="scrollbarHeight" view-style="height:100%">
          <el-menu
            :default-openeds="['2']"
            active-text-color="#ffd04b"
            background-color="#282c34"
            text-color="#fff"
            default-active="/dashboard"
            router
          >
            <el-menu-item index="/dashboard">
              <el-icon><DataLine /></el-icon>
              <span>工作台</span>
            </el-menu-item>
            <el-sub-menu index="2">
              <template #title>
                <el-icon><HelpFilled /></el-icon>
                <span>首页</span>
              </template>
              <el-menu-item index="/home">
                <span>图表</span>
              </el-menu-item>
            </el-sub-menu>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-main>
        <el-scrollbar :height="scrollbarHeight">
          <router-view></router-view>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped lang="scss">
.layout {
  height: 100%;

  .logo {
    font-size: 24px;
  }

  .el-header {
    @include style(calc(10px + 2vmin), #ffffff);
    @include flexContainer(row, space-between);

    min-height: 60px;
    background-color: $bg;

    .el-space {
      .el-dropdown {
        color: #ffffff;
        cursor: pointer;

        .el-icon {
          margin-left: 5px;
        }
      }
    }
  }

  .el-aside {
    .el-scrollbar {
      .el-menu {
        height: 100%;

        .el-menu-item {
          a {
            display: inline-block;
            color: #ffffff;
            text-decoration: none;
          }
        }
      }
    }
  }

  .el-main {
    padding: 0;
  }
}
</style>

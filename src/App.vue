<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <el-container>
    <el-aside width="150px">
      <el-menu router>
        <el-menu-item index="/">首页</el-menu-item>
        <el-sub-menu index="_raw_data">
          <template #title>原始数据</template>
          <el-sub-menu index="_raw_data_2026">
            <template #title>2026年</template>
            <el-menu-item index="raw_data_202601">1月</el-menu-item>
            <el-menu-item index="raw_data_202602">2月</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="about">关于</el-menu-item>
      </el-menu>
    </el-aside>

    <el-main>
      <RouterView />
    </el-main>
  </el-container>
</template>

<style scoped></style>

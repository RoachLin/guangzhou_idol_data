<script setup lang="ts">
import {RouterView} from "vue-router"
</script>

<template>
  <el-container>
    <el-aside width="150px">
      <el-menu router>
        <el-menu-item index="/">首页</el-menu-item>
        <el-sub-menu index="2026">
          <template #title>2026年</template>
          <el-menu-item index="202602">2026年02月</el-menu-item>
          <el-menu-item index="202601">2026年01月</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="about">关于</el-menu-item>
      </el-menu>
    </el-aside>

    <el-main>
      <RouterView/>
    </el-main>
  </el-container>
</template>

<style scoped>
</style>

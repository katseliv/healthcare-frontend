<template>
  <el-header>
    <el-menu
      mode="horizontal"
      class="main-menu"
      :router="routerMode"
      default-active="/authorization/login"
    >
      <el-menu-item index="/authorization/login"> Войти </el-menu-item>
      <el-menu-item index="/authorization/registration">
        Регистрация
      </el-menu-item>
    </el-menu>
  </el-header>
  <el-main><router-view /></el-main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      routerMode: true,
    };
  },
});
</script>

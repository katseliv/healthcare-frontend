<template>
  <header>
    <el-menu
      mode="horizontal"
      class="main-menu"
      :router="routerMode"
      default-active="/authorization/login"
    >
      <el-menu-item index="/authorization/login"> Login </el-menu-item>
      <el-menu-item index="/authorization/registration">
        Registration
      </el-menu-item>
      <el-menu-item index="/authorization/admin">
        Admin registration
      </el-menu-item>
    </el-menu>
  </header>
  <main><router-view /></main>
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

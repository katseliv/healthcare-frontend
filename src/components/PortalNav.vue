<template>
  <el-menu
    mode="horizontal"
    class="main-menu"
    :router="routerMode"
    default-active="/authorization/login"
  >
    <el-menu-item index="/portal/main-screen"> Main Screen </el-menu-item>
  </el-menu>
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
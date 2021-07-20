<template>
  <div>
    <el-menu mode="horizontal" class="main-menu">
      <el-menu-item index="1">
        <router-link to="/login">Login</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/registration">Registration</router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainContainer",
});
</script>

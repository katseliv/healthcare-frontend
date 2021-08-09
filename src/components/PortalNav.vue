<template>
  <el-menu
    mode="horizontal"
    class="main-menu"
    :router="routerMode"
    default-active="/portal/main-screen"
  >
    <el-menu-item index="/portal/main-screen"> Main Screen </el-menu-item>
    <el-menu-item index="/portal/profile"> Profile </el-menu-item>
    <el-menu-item
      index="/portal/new-visit"
      v-if="loginModule.role === 'PATIENT'"
    >
      New visit
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  data() {
    return {
      routerMode: true,
    };
  },
  computed: {
    ...mapState(["loginModule"]),
  },
});
</script>
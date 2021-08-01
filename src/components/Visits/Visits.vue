<template>
  <el-tabs type="card" v-model="activeName">
    <el-tab-pane label="History" name="first">
      <History />
    </el-tab-pane>
    <el-tab-pane label="Future" name="second">
      <Future />
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Future from "./Future.vue";
import History from "./History.vue";

export default defineComponent({
  data() {
    return {
      activeName: "first",
    };
  },
  components: {
    History,
    Future,
  },
});
</script>

<style scoped>
@media (max-width: 720px) {
  .table {
    overflow-x: scroll;
  }
}
</style>
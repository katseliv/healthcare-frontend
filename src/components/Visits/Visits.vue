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
import EventService from "@/api/EventService";

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

  async created() {
    const visits = await EventService.getVisitsByPatientId(1)
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        response.forEach((element: any) => {
          element.doctorName = "Работает";
        });

        return response;
      });
    console.log(visits);
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
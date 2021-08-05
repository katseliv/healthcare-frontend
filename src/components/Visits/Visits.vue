<template>
  <el-tabs type="card" v-model="activeName">
    <el-tab-pane label="History" name="first">
      <History :oldVisits="oldVisits" />
    </el-tab-pane>
    <el-tab-pane label="Future" name="second">
      <Future :newVisits="newVisits" />
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Future from "./Future.vue";
import History from "./History.vue";
import EventService from "@/api/EventService";
import Doctor from "@/models/doctor.model";
import Visit from "@/models/visit.model";

export default defineComponent({
  data() {
    return {
      activeName: "first",
      oldVisits: [],
      newVisits: [],
    };
  },
  components: {
    History,
    Future,
  },

  async created() {
    const visits = await EventService.getVisitsByPatientId(1).then(
      (response) => {
        return response.data;
      }
    );
    await visits.forEach(async (visit: any) => {
      visit.doctorName = await EventService.getDoctorById(visit.doctorId).then(
        (response) => {
          return response.data.fullName;
        }
      );
    });
    this.oldVisits = visits.filter((visit: any) => visit.status === "old");
    this.newVisits = visits.filter((visit: any) => visit.status === "new");
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
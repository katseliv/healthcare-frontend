<template>
  <el-tabs type="card" v-model="activeName">
    <el-tab-pane label="История" name="first">
      <History :oldVisits="oldVisits" />
    </el-tab-pane>
    <el-tab-pane label="Запись" name="second">
      <Future :newVisits="newVisits" />
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions, mapGetters } from "vuex";

import Future from "./Future.vue";
import History from "./History.vue";
import Visit from "@/models/visit.model";
import { patientAPI } from "@/api/EventService";

export default defineComponent({
  async created() {
    this.appointments = await patientAPI
      .getVisitByPatientId(this.loginModule.id, )
      .then((responce) => {
        return responce.data;
      });
    const allAppointments = await patientAPI
      .getVisitsByPatientId(this.loginModule.id)
      .then((response) => {
        return response.data;
      });

    for (let i = 0; i < this.appointments.length; i++) {
      this.appointments[i].name = allAppointments.find(
        (item: any) => item.id == this.appointments[i].id
      ).name;
    }
  },
  data() {
    return {
      activeName: "first",
      appointments: [] as Visit[],
    };
  },
  components: {
    History,
    Future,
  },
  computed: {
    newVisits() {
      return this.appointments.filter((visit) => visit.status === "new");
    },
    oldVisits() {
      return this.appointments.filter((visit) => visit.status === "old");
    },
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
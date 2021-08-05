<template>
  <el-table class="table" :data="newVisits" style="width: 100%">
    <el-table-column type="index" label="№"> </el-table-column>
    <el-table-column prop="doctorName" label="Имя врача"> </el-table-column>
    <el-table-column prop="dateAndTime" label="date"> </el-table-column>
    <el-table-column label="actions">
      <el-button icon="el-icon-delete" size="small">Удалить</el-button>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Visit from "@/models/visit.model";
//import Doctor from "@/models/doctor.model";

export default defineComponent({
  data() {
    return {
      visits: [
        {
          dateAndTime: "20.11.2021",
          doctorName: 2,
        },
        {
          dateAndTime: "20.10.2021",
          doctoName: 1,
        },
      ] as any,
    };
  },
  props: {
    newVisits: {
      type: Array,
    },
  },

  computed: {
    //   futureVisit() {
    //       let result = [];
    //       for (let index in this.visits) {
    //           let el = {...this.visits[index], ...this.doctors[index]};
    //           result.push(el);
    //       }
    //       return result;
    //   }
  },
});
</script>
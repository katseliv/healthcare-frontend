<template>
  <el-table class="table" :data="visits" style="width: 100%">
    <el-table-column type="index" label="№"> </el-table-column>
    <el-table-column prop="doctor" label="Имя врача"> </el-table-column>
    <el-table-column prop="dateAndTime" label="date"> </el-table-column>
    <el-table-column label="actions">
      <el-button icon="el-icon-delete" size="small">Удалить</el-button>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Visit from "@/models/visitit.model";
//import Doctor from "@/models/doctor.model";

export default defineComponent({
  data() {
    return {
      visits: [
        {
          dateAndTime: "20.11.2021",
          doctor: "Петров Д.В",
        },
        {
          dateAndTime: "20.10.2021",
          doctor: "Иванов И.И",
        },
      ],
      //   doctors: [
      //     {
      //       fullName: "Иванов И.И.",
      //     },
      //     {
      //       fullName: "Петорв Д.К.",
      //     },
      //   ] as Doctor[],
    };
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
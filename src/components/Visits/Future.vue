<template>
  <el-table class="table" :data="newVisits" style="width: 100%">
    <el-table-column type="index" label="№"> </el-table-column>
    <el-table-column prop="doctorName" label="Имя врача"> </el-table-column>
    <el-table-column prop="dateAndTime" label="Дата"> </el-table-column>
    <el-table-column label="Действия">
      <template #default="buttons">
        <el-button
          icon="el-icon-delete"
          @click="deleteVisit(buttons.row.id)"
          size="small"
          >Удалить</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
//import Doctor from "@/models/doctor.model";

export default defineComponent({
  data() {
    return {};
  },
  props: {
    newVisits: {
      type: Array,
    },
  },

  methods: {
    deleteVisit(id: number) {
      this.$emit("updateVisits");
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
<template>
  <el-table
    class="table"
    v-for="day in schedule"
    :key="day.id"
    :data="day.slots"
    :row-class-name="tableRowClassName"
    style="max-width: 200px"
  >
    <el-table-column :label="day.day" prop="time" width="100"></el-table-column>
    <el-table-column>
      <el-button icon="el-icon-delete" class="delete-button" size="small"
        >Удалить</el-button
      >
      <router-link :to="{ name: 'addReport' }">
        <el-button class="report-button" icon="el-icon-edit" size="small"
          >Отчёт</el-button
        >
      </router-link>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EventService from "../../api/EventService";

export default defineComponent({
  methods: {
    tableRowClassName({ row }: any) {
      let className = "";
      if (row.isFree === true) {
        className = "success-row";
      } else {
        className = "warning-row";
      }
      if (this.isExpired(row.time)) {
        className += " report-row";
      }
      return className;
    },
    isExpired(date: Date) {
      let now = new Date();
      console.log(`${now} | ${date}`);
      console.log(now > date);
      if (now > date) return true;
      return false;
    },
  },
  created() {
    EventService.getSchedule()
      .then((response) => {
        this.schedule = response.data;
      })
      .catch((error) => console.log(error));
  },
  data() {
    return {
      schedule: [],
    };
  },
  computed: {},
});
</script>

<style>
.el-table .success-row {
  background-color: #9fe99fc7;
}

.el-table .warning-row {
  background-color: #c07c7cd5;
}

.delete-button {
  display: none;
}
h5 {
  text-align: left;
}
.el-table .report-button {
  display: none;
}

.el-table .report-row .report-button {
  display: block;
}

.el-table .report-row .delete-button {
  display: none;
}
</style>


<style scoped>
@media (max-width: 720px) {
  .table {
    overflow-x: scroll;
  }
}
</style>
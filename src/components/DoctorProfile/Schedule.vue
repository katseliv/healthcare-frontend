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

  data() {
    return {
      schedule: [
        {
          day: "Пн",
          slots: [
            {
              id: 1,
              time: new Date(2021, 7, 2, 12, 40),
              isFree: false,
            },
            {
              id: 2,
              time: new Date(2021, 7, 2, 16, 40),
              isFree: true,
            },
            {
              id: 3,
              time: new Date(2021, 7, 2, 17, 45),
              isFree: true,
            },
          ],
        },
        {
          day: "Вт",
          slots: [
            {
              id: 4,
              time: new Date(2021, 7, 3, 17, 20),
              isFree: true,
            },
            {
              id: 5,
              time: new Date(2021, 7, 3, 17, 50),
              isFree: true,
            },
            {
              id: 6,
              time: new Date(2021, 7, 3, 18, 30),
              isFree: true,
            },
          ],
        },
        {
          day: "Ср",
          slots: [
            {
              id: 7,
              time: new Date(2021, 7, 4, 18, 30),
              isFree: true,
            },
            {
              id: 8,
              time: new Date(2021, 7, 4, 18, 30),
              isFree: true,
            },
            {
              id: 9,
              time: new Date(2021, 7, 4, 18, 30),
              isFree: true,
            },
          ],
        },
        {
          day: "Чт",
          slots: [
            {
              id: 10,
              time: new Date(2021, 7, 5, 18, 30),
              isFree: true,
            },
            {
              id: 11,
              time: new Date(2021, 7, 5, 18, 30),
              isFree: true,
            },
            {
              id: 12,
              time: new Date(2021, 7, 5, 18, 30),
              isFree: true,
            },
          ],
        },
        {
          day: "Пт",
          slots: [
            {
              id: 13,
              time: new Date(2021, 7, 6, 18, 30),
              isFree: true,
            },
            {
              id: 14,
              time: new Date(2021, 7, 6, 18, 30),
              isFree: true,
            },
            {
              id: 15,
              time: new Date(2021, 7, 6, 18, 30),
              isFree: true,
            },
          ],
        },
        {
          day: "Сб",
          slots: [
            {
              id: 16,
              time: new Date(2021, 7, 7, 18, 30),
              isFree: true,
            },
            {
              id: 17,
              time: new Date(2021, 7, 7, 18, 30),
              isFree: true,
            },
            {
              id: 18,
              time: new Date(2021, 7, 7, 18, 30),
              isFree: true,
            },
          ],
        },
        {
          day: "Вс",
          slots: [
            {
              id: 19,
              time: new Date(2021, 7, 8, 18, 30),
              isFree: true,
            },
            {
              id: 20,
              time: new Date(2021, 7, 8, 18, 30),
              isFree: true,
            },
            {
              id: 21,
              time: new Date(2021, 7, 8, 18, 30),
              isFree: true,
            },
          ],
        },
      ],
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
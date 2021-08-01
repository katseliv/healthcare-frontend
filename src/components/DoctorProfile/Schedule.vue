<template>
  <el-table
    class="table"
    v-for="day in schedule"
    :key="day.id"
    :data="day.slots"
    :row-class-name="tableRowClassName"
    style="max-width: 400px"
  >
    >
    <el-table-column :label="day.day" prop="time" width="200"></el-table-column>
    <el-table-column label="Действия">
      <el-button icon="el-icon-delete" size="small">Удалить</el-button>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    tableRowClassName({ row }: any) {
      if (row.isFree === true) {
        return "success-row";
      } else {
        return "warning-row";
      }
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
              time: "124:20",
              isFree: false,
            },
            {
              id: 2,
              time: "16:40",
              isFree: true,
            },
            {
              id: 3,
              time: "17:45",
              isFree: true,
            },
          ],
        },
        {
          day: "Вт",
          slots: [
            {
              id: 4,
              time: "15:20",
              isFree: true,
            },
            {
              id: 5,
              time: "16:40",
              isFree: true,
            },
            {
              id: 6,
              time: "17:45",
              isFree: true,
            },
          ],
        },
        {
          day: "Ср",
          slots: [
            {
              id: 7,
              time: "15:20",
              isFree: true,
            },
            {
              id: 8,
              time: "16:40",
              isFree: true,
            },
            {
              id: 9,
              time: "17:45",
              isFree: true,
            },
          ],
        },
        {
          day: "Чт",
          slots: [
            {
              id: 10,
              time: "15:20",
              isFree: true,
            },
            {
              id: 11,
              time: "16:40",
              isFree: true,
            },
            {
              id: 12,
              time: "17:45",
              isFree: true,
            },
          ],
        },
        {
          day: "Пт",
          slots: [
            {
              id: 13,
              time: "15:20",
              isFree: true,
            },
            {
              id: 14,
              time: "16:40",
              isFree: true,
            },
            {
              id: 15,
              time: "17:45",
              isFree: true,
            },
          ],
        },
        {
          day: "Сб",
          slots: [
            {
              id: 16,
              time: "15:20",
              isFree: true,
            },
            {
              id: 17,
              time: "16:40",
              isFree: true,
            },
            {
              id: 18,
              time: "17:45",
              isFree: true,
            },
          ],
        },
        {
          day: "Вс",
          slots: [
            {
              id: 19,
              time: "15:20",
              isFree: true,
            },
            {
              id: 20,
              time: "16:40",
              isFree: true,
            },
            {
              id: 21,
              time: "17:45",
              isFree: true,
            },
          ],
        },
      ],
    };
  },
});
</script>

<style>
.el-table .success-row {
  background-color: #9fe99fc7;
}

.el-table .warning-row {
  background-color: #c07c7cd5;
}
</style>


<style scoped>
@media (max-width: 720px) {
  .table {
    overflow-x: scroll;
  }
}
</style>
<template>
  <el-table
    class="table"
    v-for="day in schedule"
    :key="day.id"
    :data="day.slots"
  >
    <el-table-column :label="day.day" prop="time"></el-table-column>
  </el-table>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      schedule: [
        {
          day: "Пн",
          slots: [
            {
              id: 1,
              time: "15:20",
            },
            {
              id: 2,
              time: "16:40",
            },
            {
              id: 3,
              time: "17:45",
            },
          ],
        },
        {
          day: "Вт",
          slots: [
            {
              id: 4,
              time: "15:20",
            },
            {
              id: 5,
              time: "16:40",
            },
            {
              id: 6,
              time: "17:45",
            },
          ],
        },
        {
          day: "Ср",
          slots: [
            {
              id: 7,
              time: "15:20",
            },
            {
              id: 8,
              time: "16:40",
            },
            {
              id: 9,
              time: "17:45",
            },
          ],
        },
        {
          day: "Чт",
          slots: [
            {
              id: 10,
              time: "15:20",
            },
            {
              id: 11,
              time: "16:40",
            },
            {
              id: 12,
              time: "17:45",
            },
          ],
        },
        {
          day: "Пт",
          slots: [
            {
              id: 13,
              time: "15:20",
            },
            {
              id: 14,
              time: "16:40",
            },
            {
              id: 15,
              time: "17:45",
            },
          ],
        },
        {
          day: "Сб",
          slots: [
            {
              id: 16,
              time: "15:20",
            },
            {
              id: 17,
              time: "16:40",
            },
            {
              id: 18,
              time: "17:45",
            },
          ],
        },
        {
          day: "Вс",
          slots: [
            {
              id: 19,
              time: "15:20",
            },
            {
              id: 20,
              time: "16:40",
            },
            {
              id: 21,
              time: "17:45",
            },
          ],
        },
      ],
    };
  },
});
</script>

<style scoped>
@media (max-width: 720px) {
}
.table {
  overflow-x: scroll;
}
</style>
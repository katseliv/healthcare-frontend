<template>
  <el-table class="table" :data="visits" style="width: 100%">
    <el-table-column type="index" label="№"> </el-table-column>
    <el-table-column prop="result" label="result"> </el-table-column>
    <el-table-column prop="recipe" label="recipe"> </el-table-column>
    <el-table-column prop="dateAndTime" label="date"> </el-table-column>
    <el-table-column prop="status" label="status"> </el-table-column>
    <el-table-column label="actions">
      <router-link :to="{ name: 'addReview' }">
        <el-button icon="el-icon-star-off" size="small">Отзыв</el-button>
      </router-link>
      <router-link :to="{ name: 'newVisit' }">
        <el-button icon="el-icon-edit" size="small">Повтор</el-button>
      </router-link>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Visit from "@/models/visit.model";

export default defineComponent({
  data() {
    return {
      visits: [
        {
          result: "Синяк у доктора",
          recipe: "20 кубиков успокоительного",
          dateAndTime: "20.01.2021",
          status: "old",
        },
        {
          result: "Убежал из больницы",
          recipe: "НЕ ПРИХОДИТЬ БОЛЬШЕ",
          dateAndTime: "20.05.2021",
          status: "old",
        },
      ] as Visit[],
    };
  },
});
</script>

<template>
  <el-table class="table" :data="visits" style="width: 100%">
    <el-table-column type="index" label="№" min-width="50"> </el-table-column>
    <el-table-column prop="result" label="result" min-width="150">
    </el-table-column>
    <el-table-column prop="recipe" label="recipe" min-width="100">
    </el-table-column>
    <el-table-column prop="dateAndTime" label="date" min-width="100">
    </el-table-column>
    <el-table-column prop="status" label="status" min-width="100">
    </el-table-column>
    <el-table-column
      ><router-link :to="{ name: 'newVisit' }"
        ><el-button icon="el-icon-edit"></el-button></router-link
    ></el-table-column>
  </el-table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Visit from "@/models/visitit.model";

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

<style scoped>
@media (max-width: 720px) {
  .table {
    overflow-x: scroll;
  }
}
</style>
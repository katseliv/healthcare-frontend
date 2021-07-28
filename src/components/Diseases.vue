<template>
  <el-table class="table" :data="diseases" style="width: 100%">
    <el-table-column type="index" label="№" min-width="50"> </el-table-column>
    <el-table-column prop="name" label="name" min-width="150">
    </el-table-column>
    <el-table-column prop="start" label="start" min-width="100">
    </el-table-column>
    <el-table-column prop="end" label="end" min-width="100"> </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Disease from "@/models/disease.model";

export default defineComponent({
  data() {
    return {
      diseases: [
        {
          name: "Вич",
          start: "01.02.2021",
          end: "03.03.2021",
        },
        {
          name: "Гепатит",
          start: "15.07.1990",
          end: "20.03.2021",
        },
      ] as Disease[],
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
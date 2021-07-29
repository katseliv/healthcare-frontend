<template>
  <el-table :data="allergies" style="width: 100%">
    <el-table-column type="index" label="№" min-width="50"> </el-table-column>
    <el-table-column prop="description" label="Description" min-width="200">
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Allergy from "@/models/allergy.model";

export default defineComponent({
  data() {
    return {
      allergies: [
        {
          description: "Аллергия на аллергиков",
        },
        {
          description: "Аллергия на католиков",
        },
      ] as Allergy[],
    };
  },
});
</script>

<style scoped>
</style>


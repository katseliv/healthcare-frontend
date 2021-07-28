<template>
  <el-scrollbar height="300px" class="el-scollbar">
    <p class="item" :key="allergy.id" v-for="(allergy, i) in allergies">
      <span>{{ i + 1 }} )</span> {{ allergy.description }}
    </p>
  </el-scrollbar>
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
          description: "Аллергия на аллергиков",
        },
      ] as Allergy[],
    };
  },
});
</script>

<style scoped>
span {
  font-weight: bold;
  margin-right: 15px;
}
</style>


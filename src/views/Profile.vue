<template>
  <div class="profile">
    <div class="profile__avatar">
      <el-avatar shape="circle" :size="200" :fit="fit">
        <img :src="src" alt="avatar" />
      </el-avatar>
      <h4>{{ surname }} {{ name }} {{ parentName }}</h4>
    </div>
    <el-tabs
      class="profile__tabs"
      v-model="activeName"
      @tab-click="handleClick"
    >
      <el-tab-pane class="profile__tab" label="User" name="first">
      </el-tab-pane>
      <el-tab-pane class="profile__tab" label="Config" name="second"
        >Config</el-tab-pane
      >
      <el-tab-pane class="profile__tab" label="Role" name="third"
        >Role</el-tab-pane
      >
      <el-tab-pane class="profile__tab" label="Task" name="fourth"
        >Task</el-tab-pane
      >
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      activeName: "first",
      src: require("../assets/img/patient-avatar.jpg"),
      fit: "cover",
      name: "Man",
      surname: "Florida",
      parentName: "",
      sex: "",
      eMail: "",
      age: "",
    };
  },
});
</script>

<style scoped>
.profile {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  min-height: 90vh;
  min-height: calc(100vh - 110px);
}

.profile__avatar {
  flex: 0 0 30%;
  text-align: center;
  border-right: 1px solid #c4c4c4;
  margin-right: 30px;
}
.profile__tabs {
  flex: 0 1 70%;
}
</style>
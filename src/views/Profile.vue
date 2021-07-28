<template>
  <div class="profile">
    <div class="profile__avatar">
      <el-avatar shape="circle" :size="175" :fit="fit">
        <img :src="src" alt="avatar" />
      </el-avatar>
      <h4>{{ patient.surname }} {{ patient.name }} {{ patient.parentName }}</h4>
      <p><span>Sex:</span> {{ patient.sex }}</p>
      <p><span>Email:</span> {{ patient.eMail }}</p>
      <p><span>Age:</span> {{ patient.age }}</p>
    </div>
    <el-tabs class="profile__tabs" v-model="activeName">
      <el-tab-pane class="profile__tab" label="Visits" name="first">
      </el-tab-pane>
      <el-tab-pane class="profile__tab" label="Diseases" name="second"
        >Config</el-tab-pane
      >
      <el-tab-pane class="profile__tab" label="Allergies" name="third"
        >Role</el-tab-pane
      >
      <el-tab-pane class="profile__tab" label="Settings" name="fourth">
        <PatientProfileSettings />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import Patient from "@/models/patient.model";
import { defineComponent } from "vue";
import PatientProfileSettings from "../components/PatientProfileSettings.vue";

export default defineComponent({
  data() {
    return {
      activeName: "first",
      src: require("../assets/img/patient-avatar.jpg"),
      fit: "cover",
      patient: {
        name: "Man",
        surname: "Florida",
        parentName: "",
        sex: "Male",
        eMail: "man@florida.com",
        age: 35,
      } as Patient,
    };
  },
  components: {
    PatientProfileSettings,
  },
});
</script>

<style scoped>
.profile {
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 90vh;
  min-height: calc(100vh - 110px);
}

.profile__avatar {
  flex: 1 0 20%;
  text-align: center;
  border-right: 2px solid #e4e7ed;
  margin-right: 30px;
  padding-right: 10px;
}
.profile__tabs {
  flex: 0 1 80%;
}
p {
  text-align: left;
}
p span {
  font-weight: bold;
  padding-right: 5px;
}
@media (max-width: 576px) {
  .profile {
    flex-direction: column;
  }
  .profile__avatar {
    flex: 0 0 100%;
    margin-right: 0;
    margin-bottom: 2px solid #e4e7ed;
  }
  .profile__tabs {
    flex: 0 0 100%;
  }
}
</style>
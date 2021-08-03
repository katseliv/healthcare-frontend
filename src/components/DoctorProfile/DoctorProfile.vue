<template>
  <div class="profile">
    <div class="profile__avatar">
      <el-avatar shape="circle" :size="175" :fit="fit">
        <img :src="src" alt="avatar" />
      </el-avatar>
      <h4>
        {{ doctorProfile.fullName }}
      </h4>
      <p><span>Email:</span> {{ doctorProfile.eMail }}</p>
      <h5>Специальности:</h5>
      <p v-for="specitality in doctorProfile.specialties" :key="specitality">
        {{ specitality }}
      </p>
    </div>
    <el-tabs class="profile__tabs" v-model="activeName">
      <el-tab-pane class="profile__tab flex" label="Расписание" name="first">
        <Schedule />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";

import Schedule from "./Schedule.vue";

export default defineComponent({
  data() {
    return {
      activeName: "first",
      src: require("../../assets/img/patient-avatar.jpg"),
      fit: "cover",
    };
  },
  components: {
    Schedule,
  },
  computed: {
    ...mapState(["doctorProfile"]),
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
.flex {
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
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
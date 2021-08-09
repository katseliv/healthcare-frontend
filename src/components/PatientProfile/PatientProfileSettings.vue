<template>
  <el-form
    ref="settings"
    :model="settings"
    label-width="120px"
    label-position="top"
    size="medium"
    class="form"
  >
    <h2>Настройки профиля</h2>
    <el-form-item label="Изменить логин">
      <el-input v-model="settings.login"></el-input>
    </el-form-item>
    <el-form-item label="Изменить e-mail">
      <el-input type="email" v-model="settings.email"></el-input>
    </el-form-item>
    <el-form-item label="Изменить пол">
      <el-radio-group v-model="settings.sex">
        <el-radio label="M">Мужской</el-radio>
        <el-radio label="F">Женский</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="Изменить возраст">
      <el-input type="number" v-model="settings.age"></el-input>
    </el-form-item>
    <el-form-item label="Имя">
      <el-input v-model="settings.first_name"></el-input>
    </el-form-item>
    <el-form-item label="Фамилия">
      <el-input v-model="settings.mid_name"></el-input>
    </el-form-item>
    <el-form-item label="Отчество">
      <el-input v-model="settings.last_name"></el-input>
    </el-form-item>
    <el-alert
      v-if="wrongPassword"
      title="Пароли должны совпадать"
      type="error"
      :closable="false"
    />
    <el-form-item label="Изменить пароль">
      <el-input type="password" v-model="settings.password"></el-input>
    </el-form-item>
    <el-form-item label="Повторите пароль">
      <el-input type="password" v-model="settings.passwordConfirm"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="submit(settings)" type="primary"
        >Подтвердить</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EventService from "@/api/EventService";
import PatientSettings from "@/models/pateinetSettings.model";

export default defineComponent({
  props: ["patientProfile"],
  created() {
    setTimeout(() => {
      this.settings = { ...this.patientProfile };
    }, 1000);
  },
  data() {
    return {
      settings: {} as PatientSettings,
      wrongPassword: false,
    };
  },
  methods: {
    submit(settings: any) {
      if (settings.password === settings.passwordConfirm) {
        this.wrongPassword = false;
        EventService.putPatientById(this.patientProfile.id, settings).then(
          () => {
            console.log("success");
          }
        );
      } else {
        this.wrongPassword = true;
      }
    },
  },
});
</script>

<style scoped>
.form {
  max-width: 700px;
}
</style>
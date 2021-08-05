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
    <el-form-item label="Изменить ФИО">
      <el-input v-model="settings.fullName"></el-input>
    </el-form-item>
    <el-form-item label="Изменить пол">
      <el-radio-group v-model="settings.sex">
        <el-radio label="male">Мужский</el-radio>
        <br />
        <el-radio label="female">Женский</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="Изменить возраст">
      <el-input type="number" v-model="settings.age"></el-input>
    </el-form-item>
    <el-form-item label="E-mail">
      <el-input type="email" v-model="settings.eMail"></el-input>
    </el-form-item>
    <el-form-item label="Изменить пароль">
      <el-input type="password" v-model="settings.password"></el-input>
    </el-form-item>
    <el-form-item label="Повторите пароль">
      <el-input
        type="password"
        v-model="settings.passwordConfirmation"
      ></el-input>
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
import PatientSettings from "@/models/pateinetSettings.model";
import EventService from "@/api/EventService";

export default defineComponent({
  data() {
    return {
      settings: {} as PatientSettings,
    };
  },
  methods: {
    submit(settings: any) {
      EventService.putPatientById(1, settings);
    },
  },
});
</script>

<style scoped>
.form {
  max-width: 700px;
}
</style>
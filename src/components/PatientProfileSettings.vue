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
    <el-form-item label="Изменить имя">
      <el-input v-model="settings.name"></el-input>
    </el-form-item>
    <el-form-item label="Изменить фамилию">
      <el-input v-model="settings.surname"></el-input>
    </el-form-item>
    <el-form-item label="Изменить отчество">
      <el-input v-model="settings.parentName"></el-input>
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
      <el-button @click="submit" type="primary">Подтвердить</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PatentSettings from "@/models/pateinetSettings.model";
import PatientSettings from "@/models/pateinetSettings.model";

export default defineComponent({
  data() {
    return {
      settings: {} as PatientSettings,
    };
  },
  methods: {
    submit() {
      console.log(this.settings);
    },
  },
});
</script>

<style scoped>
.form {
  max-width: 700px;
}
</style>
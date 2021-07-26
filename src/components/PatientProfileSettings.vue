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
      <el-input v-model="settings.newName"></el-input>
    </el-form-item>
    <el-form-item label="Изменить фамилию">
      <el-input v-model="settings.newSurname"></el-input>
    </el-form-item>
    <el-form-item label="Изменить отчество">
      <el-input v-model="settings.newParentName"></el-input>
    </el-form-item>
    <el-form-item label="Изменить пол">
      <el-radio-group v-model="settings.newSex">
        <el-radio label="male">Мужский</el-radio>
        <br />
        <el-radio label="female">Женский</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="Изменить возраст">
      <el-input type="number" v-model="settings.newAge"></el-input>
    </el-form-item>
    <el-form-item label="E-mail">
      <el-input type="email" v-model="settings.newEMail"></el-input>
    </el-form-item>
    <el-form-item label="Изменить пароль">
      <el-input type="password" v-model="settings.newPassword"></el-input>
    </el-form-item>
    <el-form-item label="Повторите пароль">
      <el-input
        type="password"
        v-model="settings.newPasswordConfirmation"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary">Подтвердить</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      settings: {
        newName: "",
        newSurname: "",
        newParentName: "",
        newSex: "",
        newEMail: "",
        newAge: "",
        newPassword: "",
        newPasswordСonfirmation: "",
      },
    };
  },
});
</script>

<style scoped>
.form {
  max-width: 700px;
}
</style>
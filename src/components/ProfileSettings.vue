<template>
  <el-form
    ref="patientSettings"
    :model="patientSettings"
    label-width="120px"
    label-position="top"
    size="medium"
    class="form"
  >
    <h2>Настройки профиля</h2>
    <el-form-item label="Изменить имя">
      <el-input v-model="name"></el-input>
    </el-form-item>
    <el-form-item label="Изменить фамилию">
      <el-input v-model="surname"></el-input>
    </el-form-item>
    <el-form-item label="Изменить отчество">
      <el-input v-model="parentName"></el-input>
    </el-form-item>
    <el-form-item label="Изменить пол">
      <el-radio-group v-model="sex">
        <el-radio label="male">Мужский</el-radio>
        <br />
        <el-radio label="female">Женский</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="Изменить возраст">
      <el-input type="number" v-model="age"></el-input>
    </el-form-item>
    <el-form-item label="E-mail">
      <el-input type="email" v-model="eMail"></el-input>
    </el-form-item>
    <el-form-item label="Изменить пароль">
      <el-input type="password" v-model="password"></el-input>
    </el-form-item>
    <el-form-item label="Повторите пароль">
      <el-input type="password" v-model="passwordConfirmation"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Подтвердить</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      patientSettings: {
        name: "",
        surname: "",
        parentName: "",
        sex: "",
        eMail: "",
        age: "",
        password: "",
        passwordСonfirmation: "",
      },
      methods: {
        onSubmit() {
          console.log(this);
        },
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
<template>
  <el-form
    ref="patientRegistration"
    :model="patientRegistration"
    :rules="rules"
    label-width="120px"
    label-position="top"
    size="medium"
    class="form"
  >
    <h2>Регистрация</h2>
    <el-form-item label="Имя" prop="name">
      <el-input v-model="patientRegistration.name"></el-input>
    </el-form-item>
    <el-form-item label="Фамилия" prop="surname">
      <el-input v-model="patientRegistration.surname"></el-input>
    </el-form-item>
    <el-form-item label="Отчество" prop="parentName">
      <el-input v-model="patientRegistration.parentName"></el-input>
    </el-form-item>
    <el-form-item label="Пол" prop="sex">
      <el-radio-group v-model="patientRegistration.sex">
        <el-radio label="male">Мужский</el-radio>
        <br />
        <el-radio label="female">Женский</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="Возраст" prop="age">
      <el-input type="number" v-model="patientRegistration.age"></el-input>
    </el-form-item>
    <el-form-item label="E-mail" prop="eMail">
      <el-input type="email" v-model="patientRegistration.eMail"></el-input>
    </el-form-item>
    <el-form-item label="Пароль" prop="password">
      <el-input
        type="password"
        v-model="patientRegistration.password"
      ></el-input>
    </el-form-item>
    <el-form-item label="Повторите пароль" prop="passwordConfirmation">
      <el-input
        type="password"
        v-model="patientRegistration.passwordConfirmation"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Подтвердить</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PatientReg from "@/models/patientReg.model";

export default defineComponent({
  data() {
    return {
      patientRegistration: {} as PatientReg,
      rules: {
        name: [
          {
            required: true,
            message: "Введите ваше имя",
            trigger: "blur",
          },
        ],
        surname: [
          {
            required: true,
            message: "Введите вашу фамилию",
            trigger: "blur",
          },
        ],
        parentName: [
          {
            required: false,
            message: "Введите ваше отчество",
            trigger: "blur",
          },
        ],
        sex: [
          {
            required: true,
            message: "Введите ваш пол",
            trigger: "blur",
          },
        ],
        eMail: [
          {
            required: true,
            message: "Введите ваш e-mail",
            trigger: "blur",
          },
        ],
        age: [
          {
            required: true,
            message: "Введите ваш возраст",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Введите ваш пароль",
            trigger: "blur",
          },
        ],
        passwordConfirmation: [
          {
            required: true,
            message: "Повторите ваш пароль",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      console.log(this.patientRegistration);
    },
  },
});
</script>

<style lang="css" scoped>
.form {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 50px;
}
@media (max-width: 576px) {
  .form {
    padding: 0 10px;
  }
}
</style>
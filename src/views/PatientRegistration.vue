<template>
  <el-form
    ref="patientRegistration"
    :model="patientRegistration"
    label-width="120px"
    label-position="top"
    size="medium"
    class="form"
  >
    <h2>Регистрация</h2>
    <el-form-item label="Имя" required>
      <el-input v-model="patientRegistration.name"></el-input>
    </el-form-item>
    <el-form-item label="Фамилия" required>
      <el-input v-model="patientRegistration.surname"></el-input>
    </el-form-item>
    <el-form-item label="Отчество" required>
      <el-input v-model="patientRegistration.parentName"></el-input>
    </el-form-item>
    <el-form-item label="Пол" required>
      <el-radio-group v-model="patientRegistration.sex">
        <el-radio label="male">Мужский</el-radio>
        <br />
        <el-radio label="female">Женский</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="Возраст">
      <el-input type="number" v-model="patientRegistration.age"></el-input>
    </el-form-item>
    <el-form-item label="E-mail" required>
      <el-input type="email" v-model="patientRegistration.eMail"></el-input>
    </el-form-item>
    <el-form-item label="Пароль" required>
      <el-input
        type="password"
        v-model="patientRegistration.password"
      ></el-input>
    </el-form-item>
    <el-form-item label="Повторите пароль" required>
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

<script>
export default {
  data() {
    return {
      patientRegistration: {
        name: "",
        surname: "",
        parentName: "",
        sex: "",
        eMail: "",
        age: "",
        password: "",
        passwordСonfirmation: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log(this.patientRegistration);
    },
  },
};
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
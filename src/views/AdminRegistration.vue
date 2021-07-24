<template>
  <el-form
    ref="registration"
    :model="registration"
    label-width="120px"
    label-position="top"
    size="medium"
    class="form"
  >
    <h2>Регистрация администраторов и докторов</h2>
    <el-form-item label="Имя" required>
      <el-input v-model="registration.userData.name"></el-input>
    </el-form-item>
    <el-form-item label="Фамилия" required>
      <el-input v-model="registration.userData.surname"></el-input>
    </el-form-item>
    <el-form-item label="Отчество" required>
      <el-input v-model="registration.userData.parentName"></el-input>
    </el-form-item>
    <el-form-item label="E-mail" required>
      <el-input type="email" v-model="registration.userData.eMail"></el-input>
    </el-form-item>
    <el-form-item label="Пароль" required>
      <el-input
        type="password"
        v-model="registration.userData.password"
      ></el-input>
    </el-form-item>
    <el-form-item label="Повторите пароль" required>
      <el-input
        type="password"
        v-model="registration.userData.passwordConfirmation"
      ></el-input>
    </el-form-item>

    <div v-if="registration.userType === 'doctor'">
      <el-form-item
        v-for="(speciality, i) in registration.doctorInputs.specialities"
        v-bind:key="speciality.id"
        type="text"
        label="Специальность"
      >
        <el-input
          type="text"
          v-model="registration.doctorInputs.specialities[i]"
        ></el-input>
      </el-form-item>
    </div>

    <el-form-item label="Тип пользователя">
      <el-radio-group v-model="registration.userType">
        <el-radio label="admin">Админ</el-radio>
        <el-radio label="doctor">Доктор</el-radio>
      </el-radio-group>
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
      registration: {
        userType: "admin",

        userData: {
          name: "",
          surname: "",
          parentName: "",
          eMail: "",
          password: "",
          passwordСonfirmation: "",
        },
        doctorInputs: {
          exp: "",
          specialities: [""],
        },
      },
    };
  },
  methods: {
    onSubmit() {
      console.log(this.registration);
    },
    addSpeciality() {
      this.registration.doctorInputs.specialities.push("");
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
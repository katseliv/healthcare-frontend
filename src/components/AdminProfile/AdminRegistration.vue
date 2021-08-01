<template>
  <el-form
    ref="registration"
    :model="registration"
    :rules="rules"
    label-width="120px"
    label-position="top"
    size="medium"
    class="form"
  >
    <h2>Регистрация администраторов и докторов</h2>
    <el-form-item label="Имя" prop="name">
      <el-input v-model="registration.userData.name"></el-input>
    </el-form-item>
    <el-form-item label="Фамилия" prop="surname">
      <el-input v-model="registration.userData.surname"></el-input>
    </el-form-item>
    <el-form-item label="Отчество" prop="parentName">
      <el-input v-model="registration.userData.parentName"></el-input>
    </el-form-item>
    <el-form-item label="E-mail" prop="eMail">
      <el-input type="email" v-model="registration.userData.eMail"></el-input>
    </el-form-item>
    <el-form-item
      v-if="registration.userType === 'doctor'"
      label="Опыт"
      prop="exp"
    >
      <el-input type="email" v-model="registration.userData.exp"></el-input>
    </el-form-item>
    <el-form-item label="Пароль" prop="password">
      <el-input
        type="password"
        v-model="registration.userData.password"
      ></el-input>
    </el-form-item>
    <el-form-item label="Повторите пароль" prop="passwordConfirmation">
      <el-input
        type="password"
        v-model="registration.userData.passwordConfirmation"
      ></el-input>
    </el-form-item>

    <div v-if="registration.userType === 'doctor'">
      <h4>Специальности</h4>
      <el-form-item
        v-for="(speciality, i) in registration.doctorInputs.specialities"
        v-bind:key="speciality.id"
        type="text"
        :label="'Специальность ' + (i + 1)"
        prop="speciality"
      >
        <el-input
          type="text"
          v-model="registration.doctorInputs.specialities[i]"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addSpeciality">+</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="removeSpeciality">-</el-button>
      </el-form-item>
    </div>

    <el-form-item label="Тип пользователя" prop="userType">
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
        eMail: [
          {
            required: true,
            message: "Введите ваш e-mail",
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
        userType: [
          {
            required: true,
            message: "Выберите тип пользователя",
            trigger: "blur",
          },
        ],
        exp: [
          {
            required: true,
            message: "Введите стаж",
            trigger: "blur",
          },
        ],
        speciality: [
          {
            required: true,
            message: "Ввдите специальность",
            trigger: "blur",
          },
        ],
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
    removeSpeciality() {
      this.registration.doctorInputs.specialities.pop("");
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
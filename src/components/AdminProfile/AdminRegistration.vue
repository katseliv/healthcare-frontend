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
    <el-form-item label="Логин" prop="login">
      <el-input type="email" v-model="registration.login"></el-input>
    </el-form-item>
    <el-form-item label="E-mail" prop="email">
      <el-input type="email" v-model="registration.email"></el-input>
    </el-form-item>
    <el-form-item label="Пароль" prop="password">
      <el-input type="password" v-model="registration.password"></el-input>
    </el-form-item>

    <div v-if="userType === 'doctor'">
      <el-form-item label="Имя" prop="first_name">
        <el-input v-model="registration.first_name"></el-input>
      </el-form-item>
      <el-form-item label="Фамилия" prop="mid_name">
        <el-input v-model="registration.mid_name"></el-input>
      </el-form-item>
      <el-form-item label="Отчество" prop="last_name">
        <el-input v-model="registration.last_name"></el-input>
      </el-form-item>

      <!-- <h4>Специальности</h4>
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
      </el-form-item> -->
    </div>

    <el-form-item label="Тип пользователя" prop="userType">
      <el-radio-group v-model="userType">
        <el-radio label="admin">Админ</el-radio>
        <el-radio label="doctor">Доктор</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Подтвердить</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import EventService from "@/api/EventService";
import AdminReg from "@/models/adminReg.model";
export default {
  data() {
    return {
      userType: "admin",
      registration: {} as AdminReg,
      rules: {
        login: [
          {
            required: true,
            message: "Введите ваш логин",
            trigger: "blur",
          },
        ],
        first_name: [
          {
            required: true,
            message: "Введите ваше имя",
            trigger: "blur",
          },
        ],
        mid_name: [
          {
            required: true,
            message: "Введите вашу фамилию",
            trigger: "blur",
          },
        ],
        last_name: [
          {
            required: true,
            message: "Введите ваше отчество",
            trigger: "blur",
          },
        ],
        email: [
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
      },
    };
  },
  methods: {
    onSubmit() {
      if (this.userType === "admin") {
        const data = {
          login: this.registration.login,
          password: this.registration.password,
          email: this.registration.email,
        };
        EventService.postAdmin(data);
      } else if (this.userType === "doctor") {
        EventService.postDoctor(this.registration);
      }
    },
    // addSpeciality() {
    //   this.registration.doctorInputs.specialities.push("");
    // },
    // removeSpeciality() {
    //   this.registration.doctorInputs.specialities.pop("");
    // },
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
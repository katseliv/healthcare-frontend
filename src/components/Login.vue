/* eslint-disable prettier/prettier */
<template>
  <el-form
    ref="formData"
    :model="formData"
    :rules="rules"
    label-width="120px"
    label-position="top"
    size="medium"
    class="form"
  >
    <h2>Логин</h2>
    <el-form-item prop="username" label="Имя пользователя">
      <el-input
        name="username"
        type="text"
        v-model="formData.username"
      ></el-input>
    </el-form-item>
    <el-form-item prop="password" label="Пароль">
      <el-input
        name="password"
        type="password"
        v-model="formData.password"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-checkbox @click="setRememberMe"
        >Запомнить меня</el-checkbox
      >
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Войти</el-button>
    </el-form-item>
    <el-alert v-if="error" title="Неверный логин или пароль" type="error"/>
  </el-form>
</template>

<script>
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  data() {
    return {
      rules: {
        username: [
          {
            required: true,
            message: "Введите имя пользователя",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Введите пароль",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('login', this.formData);
    },
    setRememberMe() {
      this.rememberMe = !this.rememberMe;
    },
  },
  computed: {
    ...mapState(['formData', 'error'])
  }
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
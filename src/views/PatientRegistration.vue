<template>
  <el-form
    ref="form"
    :model="form"
    label-width="120px"
    label-position="top"
    size="medium"
  >
    <el-form-item label="Имя">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="Фамилия">
      <el-input v-model="form.surname"></el-input>
    </el-form-item>
    <el-form-item label="Отчество">
      <el-input v-model="form.parentName"></el-input>
    </el-form-item>
    <el-form-item label="Пол">
      <el-radio-group v-model="form.sex">
        <el-radio model-value="male" label="Мужской"></el-radio>
        <br />
        <el-radio model-value="female" label="Женский"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="E-mail">
      <el-input v-model="form.eMail"></el-input>
    </el-form-item>
    <el-form-item label="Пароль">
      <el-input v-model="form.password"></el-input>
    </el-form-item>
    <el-form-item label="Повторите пароль">
      <el-input v-model="form.passwordConfirmation"></el-input>
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
      form: {
        name: "",
        surname: "",
        parentName: "",
        sex: "",
        eMail: "",
        password: "",
        passwordСonfirmation: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style scoped>
</style>
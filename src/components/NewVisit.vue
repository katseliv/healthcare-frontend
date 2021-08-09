<template>
  <el-form
    label-width="120px"
    ref="visitForm"
    :model="visitForm"
    label-position="left"
    size="medium"
    class="form"
  >
    <h2>Создание новой записи</h2>
    <el-form-item label="Специальность" prop="specialty" required>
      <el-select v-model="chosenSpec" placeholder="Специальность">
        <el-option
          v-for="spec in specialities"
          :key="spec.id"
          :value="spec.id"
          :label="spec.name"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Дата и время" required>
      <el-col :span="11">
        <el-form-item prop="date1">
          <el-date-picker
            type="date"
            placeholder="Выберите дату"
            style="width: 100%"
          >
          </el-date-picker>
        </el-form-item>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-form-item prop="date2">
          <el-time-picker
            placeholder="Выберите время"
            style="width: 100%"
          ></el-time-picker>
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="Врач" prop="doctors">
      <el-select v-model="chosenDoctor" placeholder="Выберите врача">
        <el-option
          v-for="doctor in doctors"
          :key="doctor.id"
          :label="`${doctor.first_name} ${doctor.mid_name} ${doctor.last_name}`"
          :value="doctor"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Подтвердить</el-button>
    </el-form-item>
    <!-- <ul>
      <li v-for="doctor in visitForm.doctors" :key="doctor">{{ doctor }}</li>
    </ul> -->
  </el-form>
</template>

<script>
import { doctorAPI } from "@/api/EventService";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      visitForm: {
        doctors: ["Иванов И.И.", "Петров Д.В.", "Чубенко В.Д."],
      },
      specialities: [],
      doctors: [],
      chosenSpec: "",
      chosenDoctor: "",
    };
  },
  async created() {
    const specialities = await doctorAPI.getSpecialities().then((response) => {
      return response.data;
    });
    this.specialities = specialities;
    const doctors = await doctorAPI.getDoctors().then((response) => {
      return response.data;
    });
    this.doctors = doctors;
  },
  methods: {
    onSubmit() {
      console.log("click");
    },
  },
});
</script>

<style lang="css" scoped>
.form {
  max-width: 500px;
  padding: 0 50px;
}
@media (max-width: 576px) {
  .form {
    padding: 0 10px;
  }
}
</style>
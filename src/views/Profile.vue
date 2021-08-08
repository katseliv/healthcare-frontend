<template>
  <DoctorProfile v-if="loginModule.role === 'DOCTOR'" />
  <AdminProfile v-if="loginModule.role === 'ADMIN'" />
  <PatientProfile v-if="loginModule.role === 'PATIENT'" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";

import DoctorProfile from "@/components/DoctorProfile/DoctorProfile.vue";
import PatientProfile from "@/components/PatientProfile/PatientProfile.vue";
import AdminProfile from "@/components/AdminProfile/AdminProfile.vue";

export default defineComponent({
  components: {
    DoctorProfile,
    AdminProfile,
    PatientProfile,
  },
  computed: {
    ...mapState(["loginModule"]),
  },
});
</script>
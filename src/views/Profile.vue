<template>
  <DoctorProfile v-if="userType === 'doctor'" />
  <AdminProfile v-if="userType === 'admin'" />
  <PatientProfile v-if="userType === 'patient'" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";

import DoctorProfile from "@/components/DoctorProfile.vue";
import PatientProfile from "@/components/PatientProfile.vue";
import AdminProfile from "@/components/AdminProfile.vue";

export default defineComponent({
  components: {
    DoctorProfile,
    AdminProfile,
    PatientProfile,
  },
  computed: {
    ...mapState(["userType"]),
  },
});
</script>
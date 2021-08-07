import { createStore } from "vuex";
import loginModule from './modules/login-module';
import patientProfile from './modules/patientProfile';
import adminProfile from "./modules/adminProfile";
import doctorProfile from './modules/doctorProfile';

export default createStore({
  state: {
    userType: 'doctor',
  },
  modules: {
    loginModule,
    patientProfile,
    adminProfile,
    doctorProfile
  }
});
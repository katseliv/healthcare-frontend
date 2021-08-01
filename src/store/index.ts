import { createStore } from "vuex";
import loginModule from './modules/login-module';
import patientProfile from './modules/patientProfile';
import adminProfile from "./modules/adminProfile";

export default createStore({
  state: {
    userType: 'doctor',
  },
  modules: {
    loginModule,
    patientProfile,
    adminProfile
  }
});
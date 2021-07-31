import { createStore } from "vuex";
import loginModule from './modules/login-module';
import patientProfile from './modules/patientProfile';
import adminProfile from "./modules/adminProfile";

export default createStore({
  modules: {
    loginModule,
    patientProfile,
    adminProfile
  }
});
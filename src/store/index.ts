import { createStore } from "vuex";
import loginModule from './modules/login-module';
import patientProfile from './modules/patientProfile';

export default createStore({
  modules: {
    loginModule,
    patientProfile
  }
});
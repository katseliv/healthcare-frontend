import { createStore } from "vuex";
import loginModule from './modules/login-module';
import patientProfileModule from './modules/patientProfile';

export default createStore({
  modules: {
    loginModule,
    patientProfileModule
  }
});
import { createStore } from "vuex";
import loginModule from './modules/login-module';

export default createStore({
  modules: {
    loginModule
  }
});
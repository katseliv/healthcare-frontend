import { loginAPI } from './../../mock-server/auth';
import { createStore, storeKey } from "vuex";
import router from '@/router';

export default createStore({
  state: {
    formData: {
      username: "",
      password: ""
    },
    error: ""
  },
  mutations: {
    SET_LOGIN(state, value) {
      state.formData = value;
    },
    SET_ERROR(state, value) {
      state.error = value;
    }
  },
  actions: {
    login(context) {
      context.commit('SET_ERROR', '');
      loginAPI(context.state.formData).then(userExist => {
        if (userExist) {
          router.push('/portal');
        } else {
          context.commit('SET_ERROR', 'Неверный логин или пароль');
        }
      })
    }
  },
  modules: {}
});
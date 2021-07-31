import { loginAPI } from '../../../mock-server/auth';
import router from '@/router';

const loginModule = {
  state: () => ({
    formData: {
      username: "",
      password: "",
      rememberMe: false
    },
    error: ""
  }),
  mutations: {
    SET_LOGIN(state: any, value: any) {
      state.formData = value;
    },
    SET_ERROR(state: any, value: any) {
      state.error = value;
    }
  },
  actions: {
    login(context: any) {
      context.commit('SET_ERROR', '');
      loginAPI(context.state.formData).then(userExist => {
        if (userExist) {
          router.push('/portal');
        } else {
          context.commit('SET_ERROR', 'Неверный логин или пароль');
        }
      })
    }
  }
};

export default loginModule;
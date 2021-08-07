import EventService from '@/api/EventService';
import router from '@/router';

const loginModule = {
  state: () => ({
    formData: {
      username: "",
      password: ""
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
      EventService.login(context.state.formData)
        .then((response: any) => {
          if (response) router.push('/portal');
        })
        .catch((error: any) => {
          context.commit('SET_ERROR', error);
        })
    }
  }
};

export default loginModule;
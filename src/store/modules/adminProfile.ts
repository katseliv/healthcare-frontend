import EventService from '@/api/EventService';
import Admin from '@/models/admin.model';

const adminProfile = {
	state: () => ({
		id: 0,
		login: "",
		email: "",
	} as Admin),
	mutations: {
		UPDATE_ADMIN_PROFILE(state: any, payload: any) {
			state.id = payload.id;
			state.login = payload.login;
			state.email = payload.email;
		}
	},
	actions: {
		updateAdminProfile(context: any, id: number) {
			EventService.getAdminById(id)
				.then((response: any) => {
					context.commit('UPDATE_ADMIN_PROFILE', response.data);
				})
				.catch((error: any) => {
					console.log(error);
				})
		},
	},
	getters: {
		adminName(state: any) {
			return `${state.first_name} ${state.mid_name} ${state.last_name}`;
		}
	}

}

export default adminProfile;
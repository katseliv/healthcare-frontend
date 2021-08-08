import Patient from '@/models/patient.model'
import EventService from '@/api/EventService'

const patientProfile = {
	state: () => ({
		id: 0,
		login: "",
		email: "",
		age: 0,
		sex: "",
		allergies: [],
		first_name: "",
		mid_name: "",
		last_name: "",
		phone_number: ""
	} as Patient),
	mutations: {
		UPDATE_PATIENT_PROFILE(state: any, payload: any) {
			state.id = payload.id;
			state.login = payload.login;
			state.email = payload.email;
			state.age = payload.age;
			state.sex = payload.sex;
			state.allergies = payload.allergies;
			state.first_name = payload.first_name;
			state.mid_name = payload.mid_name;
			state.last_name = payload.last_name;
			state.phone_number = payload.phone_number;
		}
	},
	actions: {
		updatePatientProfile(context: any, id: number) {
			EventService.getPatientById(id)
				.then((response) => {
					context.commit('UPDATE_PATIENT_PROFILE', response.data)
				})
				.catch((error) => {
					console.log(error)
				})
		}
	},
	getters: {
		patientName(state: any) {
			return `${state.first_name} ${state.mid_name} ${state.last_name}`;
		}
	}
}

export default patientProfile;
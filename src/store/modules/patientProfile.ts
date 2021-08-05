import Patient from '@/models/patient.model'
import EventService from '@/api/EventService'

const patientProfile = {
	state: () => ({
		id: 0,
		fullName: "",
		sex: "",
		eMail: "",
		age: 35,
	} as Patient),
	mutations: {
		UPDATE_PATIENT_PROFILE(state: any, payload: any) {
			state.fullName = payload.fullName;
			state.sex = payload.sex;
			state.eMail = payload.eMail;
			state.age = payload.age;
			state.id = payload.id;
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
	}

}

export default patientProfile;
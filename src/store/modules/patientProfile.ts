import router from '@/router';
import Patient from '@/models/patient.model';

const patientProfile = {
	state: () => ({
		sex: "Male",
		eMail: "man@florida.com",
		age: 35,
	} as Patient),
	mutations: {

	},
	actions: {}

}

export default patientProfile;
import router from '@/router';
import Patient from '@/models/patient.model';

const patientProfile = {
	state: () => ({
		name: "Man",
		surname: "Florida",
		parentName: "",
		sex: "Male",
		eMail: "man@florida.com",
		age: 35,
	} as Patient),
	mutations: {

	},
	actions: {}

}

export default patientProfile;
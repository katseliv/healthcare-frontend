import Doctor from '@/models/doctor.model';
import router from '@/router';

const doctorProfile = {
	state: () => ({
		name: "Admin",
		surname: "Petuch",
		parentName: "Adminovich",
		eMail: "petuch@cococo.com",
		sex: "male",
		id: 2,
		specialties: [{
			id: 1,
			name: "Хирург"
		},
		{
			id: 2,
			name: "Терапевт"
		}]
	} as Doctor),
	mutations: {
	},
	actions: {}
}

export default doctorProfile;
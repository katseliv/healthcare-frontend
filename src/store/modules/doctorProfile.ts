import Doctor from '@/models/doctor.model';
import router from '@/router';

const doctorProfile = {
	state: () => ({
		fullName: "Admin",
		eMail: "doctor@gmail.com",
		age: 12,
		totalStage: 3,
		specialties: ["Хирург", "Терапевт"],
	} as Doctor),
	mutations: {
	},
	actions: {}
}

export default doctorProfile;
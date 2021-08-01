import Admin from '@/models/admin.model';
import router from '@/router';

const adminProfile = {
	state: () => ({
		name: "Admin",
		surname: "Petuch",
		parentName: "Adminovich",
		eMail: "petuch@cococo.com",
	} as Admin),
	mutations: {
	},
	actions: {}

}

export default adminProfile;
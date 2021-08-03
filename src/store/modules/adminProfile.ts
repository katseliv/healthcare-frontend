import Admin from '@/models/admin.model';
import router from '@/router';

const adminProfile = {
	state: () => ({
		fullName: "Admin",
		eMail: "admin@gmail.com",
	} as Admin),
	mutations: {
	},
	actions: {}

}

export default adminProfile;
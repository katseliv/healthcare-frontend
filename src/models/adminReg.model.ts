import Admin from "./admin.model";

interface AdminReg extends Admin {
	userType: string,

	password: string,
	passwordConfirmation: string,
	id: undefined,
	specialities: string[] | undefined,

}

export default AdminReg
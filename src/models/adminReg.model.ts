import Admin from "./admin.model";

interface AdminReg extends Admin {
	password: string,
	passwordConfirmation: string,
	id: undefined,
}

export default AdminReg
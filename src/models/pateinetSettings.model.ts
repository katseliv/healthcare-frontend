import User from "./User.model";

interface PatientSettings extends User {
	sex: string,
	allergies: string[],
	first_name: string,
	mid_name: string,
	last_name: string,
	phone_number: string,
	birthdate: string,
	password: string,
	passwordConfirm: string
}

export default PatientSettings
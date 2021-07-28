import Patient from "@/models/patient.model";

interface PatientReg extends Patient {
	password: string,
	passwordConfirmation: string,
	id: undefined

}

export default PatientReg
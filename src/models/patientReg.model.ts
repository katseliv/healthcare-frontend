import Patient from "@/models/patient.model";

interface PatientReg extends Patient {
	password: string,
	passwordConfirmation: string,
}

export default PatientReg
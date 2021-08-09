import Patient from "@/models/patient.model";

interface PatientSettings extends Patient {
	password: string,
	passwordConfirm: string
}

export default PatientSettings
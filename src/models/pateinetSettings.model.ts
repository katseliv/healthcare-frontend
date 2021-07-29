import PatientReg from "@/models/patientReg.model";

interface PatientSettings extends PatientReg {
	oldPassword: string
}

export default PatientSettings
import Admin from "./admin.model";

interface Doctor extends Admin {
	age: number,
	specialties: Array<string>,
	totalStage: number,
	weekends: Array<number>
}

export default Doctor;
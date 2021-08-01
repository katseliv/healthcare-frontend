import Admin from "./admin.model";

interface Doctor extends Admin {
	sex: string,
	specialties: object[],
}

export default Doctor
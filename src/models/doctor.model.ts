import Admin from "./admin.model";

interface Doctor extends Admin {
	specialties: object[],
}

export default Doctor
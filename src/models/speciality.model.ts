import EntityModel from "./entity.model";

interface Speciality extends EntityModel {
	id: number,
	name: string,
	receive_date: string
}

export default Speciality
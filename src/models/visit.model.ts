import EntityModel from './entity.model';

interface Visit extends EntityModel {
	doctorId: number,
	patientId: number,
	result: string | undefined,
	recipe: string | undefined,
	dateAndTime: string,
	isTaken: string
}

export default Visit
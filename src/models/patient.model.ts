import EntityModel from '@/models/entity.model';


interface Patient extends EntityModel {
	name: string,
	surname: string,
	parentName: string,
	sex: string,
	eMail: string | undefined,
	age: number,
}

export default Patient;
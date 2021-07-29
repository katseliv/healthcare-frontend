import EntityModel from '@/models/entity.model';

interface Disease extends EntityModel {
	name: string,
	start: string,
	end: string

}

export default Disease
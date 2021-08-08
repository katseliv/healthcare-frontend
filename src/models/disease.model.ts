import EntityModel from '@/models/entity.model';

interface Disease extends EntityModel {
	name: string,
	start_date: string,
	end_date: string
}

export default Disease
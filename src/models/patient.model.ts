import Admin from '@/models/admin.model';

interface Patient extends Admin {
	sex: string,
	age: number,
}

export default Patient;
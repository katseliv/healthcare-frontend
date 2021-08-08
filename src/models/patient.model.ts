import User from '@/models/User.model';

interface Patient extends User {
	age: number,
	sex: string,
	allergies: string[],
	first_name: string,
	mid_name: string,
	last_name: string,
	phone_number: string
}

export default Patient;
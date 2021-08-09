import User from "@/models/user.model";

interface Doctor extends User {
	first_name: string,
	mid_name: string,
	last_name: string,
	rating: number,
	weekends: Array<number>
}

export default Doctor;
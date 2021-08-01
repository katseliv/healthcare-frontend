import EntityModel from "@/models/entity.model"

interface Admin extends EntityModel {
	fullName: string,
	eMail: string | undefined,
}

export default Admin
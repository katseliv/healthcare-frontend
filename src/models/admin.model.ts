import EntityModel from "@/models/entity.model"

interface Admin extends EntityModel {
	name: string,
	surname: string,
	parentName: string,
	eMail: string | undefined,
}

export default Admin
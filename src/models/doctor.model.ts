import EntityModel from "./entity.model";

interface Doctor extends EntityModel {
    fullName: string,
    age: number,
    email: string,
    specialties: Array<string>,
    totalStage: number
}

export default Doctor;
import Visit from "@/models/visit.model";
import axios from "axios"

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
})

const EventService = {
    getSchedule() {
        return apiClient.get('/schedule');
    },
    deleteSlot(dayId: number) {
        return apiClient.delete(`/schedule/${dayId}`);
    },
    getPatientById(id: number) {
        return apiClient.get(`/patients/${id}`)
    },
    putPatientById(id: number, patientData: any) {
        return apiClient.put(`/patients/${id}`, patientData)
    },
    getVisitsByPatientId(patientId: number) {
        return apiClient.get(`/appointments?patientId=${patientId}`)
    },
    deleteVisitById(id: number) {
        console.log(id);
        return apiClient.delete(`/appointments/${id}`)
    },
    getDoctorById(id: number) {
        return apiClient.get(`/doctors/${id}`)
    }

}
export default EventService
import axios from "axios"

const apiClient = axios.create({
    // baseURL: 'http://localhost:8080/api',
    baseURL: 'http://servachok2021.ddns.net:8081/api',
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
})

export const authAPI = {
    login(formData: any) {
        const data = new FormData();
        data.set('username', formData.username);
        data.set('password', formData.password);
        return apiClient.post('/user/login', data);
    },
    logout() {
        return apiClient.get('user/logout');
    }
}

export const patientAPI = {
    postPatient(data: any) {
        return apiClient.post('/patients', { ...data })
    },
    getPatientById(id: number) {
        return apiClient.get(`/patients/${id}`)
    },
    putPatientById(id: number, patientData: any) {
        return apiClient.put(`/patients/${id}`, patientData)
    },
    getPatientDiseases(id: number) {
        return apiClient.get(`/patients/${id}/diseases`)
    },
    getPatientAllergies(id: number) {
        return apiClient.get(`/patients/${id}/allergies`)
    },
    postVisitByPatientId(patientId: number, data: any){
        return apiClient.post(`/patients/${patientId}/appointments`, { ...data })
    },
    getVisitByPatientId(patientId: number, id: number){
        return apiClient.get(`/patients/${patientId}/appointments/${id}`)
    },
    getVisitsByPatientId(patientId: number) {
        return apiClient.get(`/patients/${patientId}/appointments`)
    },
    deleteVisitById(patientId: number, id: number) {
        console.log(id);
        return apiClient.delete(`/patients/${patientId}/appointments/${id}`)
    },
}

export const doctorAPI = {
    getDoctors() {
        return apiClient.get(`/doctors`);
    },
    getDoctorById(id: number) {
        return apiClient.get(`/doctors/${id}`)
    },
    postSpecialityByDoctorId(doctorId: number, specialityData: any) {
        return apiClient.post(`/doctors/${doctorId}/specialities`, specialityData)
    },
    getSpecialities() {
        return apiClient.get('/specialities')
    },
    getSpecialitiesByDoctorId(doctorId: number) {
        return apiClient.get(`/doctors/${doctorId}/specialities`)
    },
    putVisitById(id: number, visitData: any) {
        return apiClient.put(`/doctors/${id}/appointments`, visitData)
    },
}

export const adminAPI = {
    getAdminById(id: number) {
        return apiClient.get(`/admins/${id}`)
    },
    postAdmin(data: any) {
        return apiClient.post('/admins', { ...data })
    },
    postDoctor(data: any) {
        return apiClient.post('/doctors', { ...data })
    },
}

import EventService from '@/api/EventService';
import Doctor from '@/models/doctor.model';

const doctorProfile = {
	state: () => ({
		id: 0,
		fullName: "",
		eMail: "",
		age: 0,
		totalStage: 0,
		specialties: [],
		weekends: [6, 7]
	} as Doctor),
	mutations: {
		SET_WEEKEND(state: any, dayNum: number) {
			state.weekends.push(dayNum);
		},
		RESET_WEEKENDS(state: any) {
			state.weekends = [];
		},
		UPDATE_DOCTOR_PROFILE(state: any, payload: any) {
			state.id = payload.id;
			state.fullName = payload.fullName;
			state.age = payload.age;
			state.eMail = payload.email;
			state.specialties = payload.specialties;
			state.totalStage = payload.totalStage;
		}
	},
	actions: {
		updateDoctorProfile(context: any, id: number) {
			console.log(context);
			EventService.getDoctorById(id)
				.then((response: any) => {
					context.commit('UPDATE_DOCTOR_PROFILE', response.data);
				})
				.catch((error: any) => {
					console.log(error);
				})
		},
		resetWeekends(context: any) {
			context.commit('RESET_WEEKENDS');
		},
		addWeekend(context: any, weekday: string) {
			console.log(context.state.weekends);
			if (context.state.weekends.length < 2) {
				switch (weekday) {
					case "Понедельник":
						context.commit('SET_WEEKEND', 1);
						break;
					case "Вторник":
						context.commit('SET_WEEKEND', 2);
						break;
					case "Среда":
						context.commit('SET_WEEKEND', 3);
						break;
					case "Четверг":
						context.commit('SET_WEEKEND', 4);
						break;
					case "Пятница":
						context.commit('SET_WEEKEND', 5);
						break;
					case "Суббота":
						context.commit('SET_WEEKEND', 6);
						break;
					case "Воскресенье":
						context.commit('SET_WEEKEND', 7);
						break;
					default:
						break;
				}
			}
		}
	}
}

export default doctorProfile;
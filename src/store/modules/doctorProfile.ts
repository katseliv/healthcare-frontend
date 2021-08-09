import EventService from '@/api/EventService';
import Doctor from '@/models/doctor.model';

const doctorProfile = {
	state: () => ({
		id: 0,
		email: "email",
		login: "login",
		first_name: "fn",
		mid_name: "mn",
		last_name: "ln",
		rating: 0,
		//age: 0,
		//totalStage: 0,
		//specialties: [],
		weekends: [6, 7],
		// currentWeek: [
		// 	"2021-08-09",
		// 	"2021-08-10",
		// 	"2021-08-11",
		//	"2021-08-12",
		//	"2021-08-13",
		//	"2021-08-14",
		//	"2021-08-15",
		//],
		schedule: [
			{
				id: 1,
				day: "Пн",
				date: "2021-08-09",
				slots: [
					{
						id: 1,
						time: "2021-08-09T12:40:00",
						isFree: false
					},
					{
						id: 2,
						time: "2021-08-09T16:40:00",
						isFree: false
					},
					{
						id: 3,
						time: "2021-08-09T17:45:00",
						isFree: false
					}
				]
			},
			{
				id: 2,
				day: "Вт",
				date: "2021-08-10",
				slots: [
					{
						id: 4,
						time: "2021-08-10T17:20:00",
						isFree: true
					},
					{
						id: 5,
						time: "2021-08-10T17:50:00",
						isFree: false
					},
					{
						id: 6,
						time: "2021-08-10T18:30:00",
						isFree: false
					}
				]
			},
			{
				id: 3,
				day: "Ср",
				date: "2021-08-11",
				slots: [
					{
						id: 7,
						time: "2021-08-11T17:30:00",
						isFree: false
					},
					{
						id: 8,
						time: "2021-08-11T18:00:00",
						isFree: false
					},
					{
						id: 9,
						time: "2021-08-11T18:30:00",
						isFree: false
					}
				]
			},
			{
				id: 4,
				day: "Чт",
				date: "2021-08-12",
				slots: [
					{
						id: 10,
						time: "2021-08-12T17:30:00",
						isFree: true
					},
					{
						id: 11,
						time: "2021-08-12T18:00:00",
						isFree: true
					},
					{
						id: 12,
						time: "2021-08-12T18:30:00",
						isFree: false
					}
				]
			},
			{
				id: 5,
				day: "Пт",
				date: "2021-08-13",
				slots: [
					{
						id: 13,
						time: "2021-08-13T17:30:00",
						isFree: false
					},
					{
						id: 14,
						time: "2021-08-13T18:00:00",
						isFree: true
					},
					{
						id: 15,
						time: "2021-08-13T18:30:00",
						isFree: true
					}
				]
			},
			{
				id: 6,
				day: "Сб",
				date: "2021-08-14",
				slots: [
					{
						id: 16,
						time: "2021-08-14T17:30:00",
						isFree: false
					},
					{
						id: 17,
						time: "2021-08-14T18:00:00",
						isFree: false
					},
					{
						id: 18,
						time: "2021-08-14T18:30:00",
						isFree: true
					}
				]
			},
			{
				id: 7,
				day: "Вс",
				date: "2021-08-15",
				slots: [
					{
						id: 19,
						time: "2021-08-15T17:30:00",
						isFree: true
					},
					{
						id: 20,
						time: "2021-08-15T18:00:00",
						isFree: true
					},
					{
						id: 21,
						time: "2021-08-15T18:30:00",
						isFree: true
					}
				]
			}
		],
	} as Doctor),
	mutations: {
		SET_WEEKEND(state: any, dayNum: number) {
			state.weekends.push(dayNum);
		},
		RESET_WEEKENDS(state: any) {
			state.weekends = [];
		},
		UPDATE_DOCTOR_PROFILE(state: any, payload: any) {
			for (const prop in state) {
				if (prop in payload) {
					state[prop] = payload[prop];
				}
			}
		}
	},
	actions: {
		updateDoctorProfile(context: any, id: number) {
			//console.log(context);
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
	},
	getters: {
		doctorName(state: any) {
			return `${state.first_name} ${state.mid_name} ${state.last_name}`;
		}
	}
}

export default doctorProfile;
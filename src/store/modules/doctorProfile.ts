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
		schedule: [
			{
				id: 1,
				day: "Пн",
				date: "2021-06-26",
				slots: [
					{
						id: 1,
						time: "2021-08-02T12:40:00",
						isFree: false
					},
					{
						id: 2,
						time: "2021-08-02T16:40:00",
						isFree: true
					},
					{
						id: 3,
						time: "2021-08-02T17:45:00",
						isFree: true
					}
				]
			},
			{
				id: 2,
				day: "Вт",
				date: "2021-06-27",
				slots: [
					{
						id: 4,
						time: "2021-08-03T17:20:00",
						isFree: true
					},
					{
						id: 5,
						time: "2021-08-03T17:50:00",
						isFree: true
					},
					{
						id: 6,
						time: "2021-08-03T18:30:00",
						isFree: true
					}
				]
			},
			{
				id: 3,
				day: "Ср",
				date: "2021-06-28",
				slots: [
					{
						id: 7,
						time: "2021-08-04T17:30:00",
						isFree: true
					},
					{
						id: 8,
						time: "2021-08-04T18:00:00",
						isFree: true
					},
					{
						id: 9,
						time: "2021-08-04T18:30:00",
						isFree: true
					}
				]
			},
			{
				id: 4,
				day: "Чт",
				date: "2021-06-29",
				slots: [
					{
						id: 10,
						time: "2021-08-05T17:30:00",
						isFree: true
					},
					{
						id: 11,
						time: "2021-08-05T18:00:00",
						isFree: true
					},
					{
						id: 12,
						time: "2021-08-05T18:30:00",
						isFree: true
					}
				]
			},
			{
				id: 5,
				day: "Пт",
				date: "2021-06-30",
				slots: [
					{
						id: 13,
						time: "2021-08-06T17:30:00",
						isFree: true
					},
					{
						id: 14,
						time: "2021-08-06T18:00:00",
						isFree: true
					},
					{
						id: 15,
						time: "2021-08-06T18:30:00",
						isFree: true
					}
				]
			},
			{
				id: 6,
				day: "Сб",
				date: "2021-06-31",
				slots: [
					{
						id: 16,
						time: "2021-08-07T17:30:00",
						isFree: true
					},
					{
						id: 17,
						time: "2021-08-07T18:00:00",
						isFree: true
					},
					{
						id: 18,
						time: "2021-08-07T18:30:00",
						isFree: true
					}
				]
			},
			{
				id: 7,
				day: "Вс",
				date: "2021-06-01",
				slots: [
					{
						id: 19,
						time: "2021-08-08T17:30:00",
						isFree: true
					},
					{
						id: 20,
						time: "2021-08-08T18:00:00",
						isFree: true
					},
					{
						id: 21,
						time: "2021-08-08T18:30:00",
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
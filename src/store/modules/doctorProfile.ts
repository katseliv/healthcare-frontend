import Doctor from '@/models/doctor.model';
import router from '@/router';

const doctorProfile = {
	namespaced: true,
	state: () => ({
		id: 1,
		fullName: "Admin",
		eMail: "doctor@gmail.com",
		age: 12,
		totalStage: 3,
		specialties: ["Хирург", "Терапевт"],
		weekends: [5, 7]
	} as Doctor),
	mutations: {
		SET_WEEKEND(state: any, dayNum: number) {
			state.weekends.push(dayNum);
		},
		RESET_WEEKENDS(state: any) {
			state.weekends = [];
		}
	},
	actions: {
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
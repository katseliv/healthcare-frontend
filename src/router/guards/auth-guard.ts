import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { getUserProfile } from '../../../mock-server/auth';

const authGuard = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    getUserProfile()
        .then(() => next(true))
        .catch(() => next({ name: 'login' }));
}

export default authGuard;
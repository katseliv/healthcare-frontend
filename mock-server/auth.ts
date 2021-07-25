

const timeout = 100;
let isAuthorized = false;

export interface ILogin {
    username: string;
    password: string;
}

export const login = (value: ILogin) => {
    return new Promise(resolve => {
        setTimeout(() => {
            if (value.username === 'user' && value.password === '123') {
                isAuthorized = true;
                console.log("resolved");
                resolve(true);
            } else {
                isAuthorized = false;
                console.log("unresolved");
                resolve(false);
            }
        }, timeout);
    });
}

export const getUserProfile = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isAuthorized) {
                resolve({
                    id: '1',
                    firstName: 'John',
                    lastName: 'Doe'
                });
            }
            reject(new Error('Not authorized'));
        }, timeout);
    });
}
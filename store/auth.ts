import { defineStore } from 'pinia';
import { urlLogin, urlRegister } from '~/utils';

interface UserPayloadInterface {
    account: string;
    password: string;
}

interface UserRegisterPayLoadInterface {
    name: string;
    gender: number;
    account: string;
    password: string;
}


export const useAuthStore = defineStore('auth', {
    state: () => ({
        authenticated: false,
        loading: false,
    }),
    actions: {
        async authenticateUser({ account, password }: UserPayloadInterface) {
            // useFetch from nuxt 3
            const { data, pending }: any = await useFetch(urlLogin, {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: {
                    account,
                    password,
                },
            });
            this.loading = pending;

            if (data.value) {
                const token = useCookie('token'); // useCookie new hook in nuxt 3
                token.value = data?.value?.accessToken; // set token to cookie
                this.authenticated = true; // set authenticated  state value to true
            }
        },
        logUserOut() {
            const token = useCookie('token'); // useCookie new hook in nuxt 3
            this.authenticated = false; // set authenticated  state value to false
            token.value = null; // clear the token cookie
        },
        async registerUser({ name, gender, account, password }: UserRegisterPayLoadInterface) {
            // useFetch from nuxt 3
            const { data, pending }: any = await useFetch(urlRegister, {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: {
                    name,
                    gender,
                    account,
                    password,
                },
            });
            this.loading = pending;
            if (data.value) {
                // success
            }
        }
    },
});
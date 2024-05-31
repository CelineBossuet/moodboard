import {redirect} from "@sveltejs/kit";

export const actions = {
    login: async ({ cookies}) => {
        throw redirect(303, '/signin');
    },
    logout: async ({ cookies}) => {
        cookies.delete('allowed', { path: '/' });
        cookies.delete('user', { path: '/' });
        throw redirect(303, '/signin');
    }
}
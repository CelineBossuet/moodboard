import {fail, redirect} from "@sveltejs/kit";


export function load({ cookies }) {
    if (cookies.get('allowed')) {
        //throw redirect(307, '/');
    }
}

export const actions = {
    login: async ({ cookies}) => {
        throw redirect(303, '/welcome');
    },
    logout: async ({ cookies}) => {
        cookies.delete('allowed', { path: '/' });
        cookies.delete('user', { path: '/' });
        throw redirect(303, '/welcome');
    },
    auth: async ({ request, cookies }) => {
        const data = await request.formData();


        cookies.set('allowed', 'true', {
            path: '/'
        });
        cookies.set('user', data.get('username'), {
            path: '/'
        });

        throw redirect(303, '/');

    }
};

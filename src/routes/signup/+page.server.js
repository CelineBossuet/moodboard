import {fail, redirect} from "@sveltejs/kit";
import * as db from '$lib/server/database.js';


export const actions = {
    logout: async ({cookies}) => {
        cookies.delete('allowed', {path: '/'});
        cookies.delete('user', {path: '/'});
        throw redirect(303, '/signin');
    },
    signup: async ({ request, cookies }) => {
        const data = await request.formData();
        db.createUser(data.get("username"), data.get("password"))

        cookies.set('allowed', 'true', {
            path: '/'
        });
        cookies.set('user', data.get('username'), {
            path: '/'
        });
        throw redirect(303, '/');

    }
}
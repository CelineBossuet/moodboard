import {fail, redirect} from "@sveltejs/kit";
import * as db from '$lib/server/database.js';



export function load({ cookies }) {
    if (cookies.get('allowed')) {
        //throw redirect(307, '/');
    }
}

export const actions = {

    logout: async ({ cookies}) => {
        cookies.delete('allowed', { path: '/' });
        cookies.delete('user', { path: '/' });
        throw redirect(303, '/signin');
    },
    auth: async ({ request, cookies }) => {
        const data = await request.formData();
        const user = db.getUser(data.get("username"))
        console.log(user[0])
        if (user[0].pwd === data.get("password")) {
            cookies.set('allowed', 'true', {
                path: '/'
            });
            cookies.set('user', data.get('username'), {
                path: '/'
            });
            throw redirect(303, '/');

        } else {
            console.log("wrong pwd")
        }

    }
};

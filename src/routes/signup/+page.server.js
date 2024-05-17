import {fail, redirect} from "@sveltejs/kit";
import * as db from '$lib/server/database.js';


export const actions = {
    login: async ({cookies}) => {
        throw redirect(303, '/welcome');
    },
    logout: async ({cookies}) => {
        cookies.delete('allowed', {path: '/'});
        cookies.delete('user', {path: '/'});
        throw redirect(303, '/welcome');
    },
    signup: async ({ request, cookies }) => {
        const data = await request.formData();
        db.createUser(data.get("username"), data.get("password"))

        throw redirect(303, '/welcome');

    }
}
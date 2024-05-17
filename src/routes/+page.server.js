import * as db from '$lib/server/database.js';
import {fail, redirect} from '@sveltejs/kit';

export function load({ cookies }) {
    console.log(cookies.get('user'))
    if (!cookies.get('allowed')) {
        throw redirect(307, '/welcome');
    }
    console.log("db.getFeelings() : "+db.getFeelings())
    return {
        feelings: db.getFeelings()
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
    clear: async ({}) => {
        db.deleteFeelings()
    },
    create: async ({ cookies, request }) => {
    const data = await request.formData();
        try {
            console.log("data : "+data)
            db.createFeeling(cookies.get('user'), data.get('msg'));
        } catch (error) {
            return fail(422, {
                description: data.get('msg'),
                error: error.message
            });
        }
    }
};

import * as db from '$lib/server/database.js';
import {fail, redirect} from '@sveltejs/kit';

export function load({ cookies }) {
    console.log(cookies.getAll())
    if (!cookies.get('allowed')) {
        throw redirect(307, '/welcome');
    }

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
    create: async ({ cookies, request }) => {
    const data = await request.formData();
        try {
            db.createFeeling(cookies.get('user'), data.get('description'));
        } catch (error) {
            return fail(422, {
                description: data.get('description'),
                error: error.message
            });
        }
    }
};

import * as db from '$lib/server/database.js';

export function load({ cookies }) {
    console.log(cookies.getAll())
    let id = cookies.get('userid');

    if (!id) {
        id = crypto.randomUUID();
        cookies.set('userid', id, { path: '/' });
    }

    return {
        feelings: db.getFeelings()
    }
}

export const actions = {
    default: async ({ cookies, request }) => {
    const data = await request.formData();
    db.createFeeling(cookies.get('userid'), data.get('description'));
}
};

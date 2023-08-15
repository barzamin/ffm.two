import type { Actions } from './$types';
import { db } from '$lib/server/db';
import { createSessionToken } from '$lib/server/auth';
import { fail, redirect } from '@sveltejs/kit';
import { base } from '$app/paths';
import type { PageServerLoad } from './$types';
import * as argon2 from 'argon2';

export const load: PageServerLoad = async ({ parent }) => {
    // check if they're already logged in
    const { artist: sessionArtist } = await parent();
    if (sessionArtist) {
        throw redirect(303, `${base}/backstage`);
    }
};

export const actions: Actions = {
    default: async (ev) => {
        const fd = await ev.request.formData();
        const email = fd.get('email');
        const password = fd.get('password');

        if (!email) {
            return fail(400, { email, missingEmail: true });
        }

        const artist = await db.artist.findUnique({
            where: { email: email.toString() },
        });

        if (!artist) {
            return fail(404, { email, noArtist: true });
        }

        if (!password || !argon2.verify(artist.passwordHash, password.toString())) {
            return fail(401, { email, badPassword: true });
        }

        // create session blah blah
        const tok = createSessionToken(artist);
        ev.cookies.set('sessiontoken', tok, { path: '/' });

        throw redirect(303, `${base}/backstage`);
    },
};

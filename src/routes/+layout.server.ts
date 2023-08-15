import { SESSION_COOKIE } from '$env/static/private';
import { getUserFromSession } from '$lib/server/auth';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
    const sessionCookie = cookies.get(SESSION_COOKIE);
    return {
        artist: sessionCookie && (await getUserFromSession(sessionCookie)),
    };
};

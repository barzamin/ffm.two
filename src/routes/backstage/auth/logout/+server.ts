import type { RequestHandler } from './$types';
import { redirect } from '@sveltejs/kit';
import { SESSION_COOKIE } from '$env/static/private';

export const POST: RequestHandler = ({ cookies }) => {
    cookies.delete(SESSION_COOKIE, {
        path: '/',
    });

    throw redirect(303, '/');
};

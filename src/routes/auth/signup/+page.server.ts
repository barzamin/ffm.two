import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import * as argon2 from 'argon2';
import { db } from '$lib/server/db';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

export const actions: Actions = {
    default: async (ev) => {
        const fd = await ev.request.formData();
        const name = fd.get('name');
        const email = fd.get('email');
        const password = fd.get('password');

        if (!name) {
            return fail(400, { name, email, missingName: true });
        }
        if (!email) {
            return fail(400, { name, email, missingEmail: true });
        }
        if (!password) {
            return fail(400, { name, email, missingPassword: true });
        }

        const passwordHash = await argon2.hash(password.toString());
        // unclear if catching is idiomatic prisma, but they do it [here!](https://www.prisma.io/docs/concepts/components/prisma-client/handling-exceptions-and-errors)
        try {
            await db.artist.create({
                data: {
                    name: name.toString(),
                    email: email.toString(),
                    passwordHash: passwordHash,
                    links: {},
                },
            });
        } catch (e) {
            if (e instanceof PrismaClientKnownRequestError) {
                if (e.code == 'P2002') {
                    return fail(400, { name, email, alreadyExists: true });
                }
            }
            throw e;
        }

        throw redirect(302, '/auth/login');
    },
};

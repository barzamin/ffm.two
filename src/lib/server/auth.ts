import type { Artist } from '@prisma/client';
import { env } from '$env/dynamic/private';
import { db } from '$lib/server/db';
import * as jwt from 'jsonwebtoken';

export function createSessionToken(artist: Artist): string {
    return jwt.sign({ artistId: artist.id }, env.JWT_SECRET, { expiresIn: '14d' });
}

export async function getUserFromSession(sessionToken: string): Promise<Artist | null> {
    let token;
    try {
        token = jwt.verify(sessionToken, env.JWT_SECRET) as jwt.JwtPayload;
    } catch (e) {
        return null;
    }

    const artist = await db.artist.findUnique({
        where: { id: token.artistId },
    });

    return artist;
}

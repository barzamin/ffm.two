import type { Artist } from '@prisma/client';
import { env } from '$env/dynamic/private';
import { db, exclude } from '$lib/server/db';
import * as jwt from 'jsonwebtoken';

export function createSessionToken(artist: Artist): string {
    return jwt.sign({ artistId: artist.id }, env.JWT_SECRET, { expiresIn: '14d' });
}

// yankee with no password
export type ArtistLite = Omit<Artist, 'passwordHash'>;

export async function getUserFromSession(sessionToken: string): Promise<ArtistLite | null> {
    let token;
    try {
        token = jwt.verify(sessionToken, env.JWT_SECRET) as jwt.JwtPayload;
    } catch (e) {
        return null;
    }

    const artist = exclude(await db.artist.findUnique({
        where: { id: token.artistId },
    }), ['passwordHash']);

    return artist;
}

import type { Artist } from '@prisma/client';
import { env } from '$env/dynamic/private';
import * as jwt from 'jsonwebtoken';

export function createSessionToken(artist: Artist): string {
    return jwt.sign({ artistId: artist.id }, env.JWT_SECRET, { expiresIn: '14d' });
}

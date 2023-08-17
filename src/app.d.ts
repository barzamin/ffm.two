// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { ArtistLite } from '$lib/server/auth';

declare global {
    namespace App {
        // interface Error {}
        // interface Locals {}
        interface PageData {
            artist: ArtistLite | null;
        }
        // interface Platform {}
    }
}

export {};

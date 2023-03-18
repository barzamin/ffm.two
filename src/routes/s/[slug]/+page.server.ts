import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
    const presave = { slug: params.slug };
    return { presave };
};

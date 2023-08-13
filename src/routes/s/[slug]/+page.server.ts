import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
	const campaign = { slug: params.slug };
	return { campaign };
};

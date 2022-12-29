import type { Publication } from '$lib/types';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

// Load published form
export const load: PageServerLoad = async ({ params, fetch }) => {
	const slug = params.slug;

	const response = await fetch(`/api/publications?slug=${slug}`);
	const data = await response.json();
	const publication: Publication = data?.publications?.length ? data.publications[0] : null;

	if (!publication) throw error(404, 'Form not found');
	return publication.content;
};

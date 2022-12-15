import type { PageServerLoad, PageServerData } from './$types';
import type { Publication } from '$lib/types';
import { error, type Actions } from '@sveltejs/kit';
import db from '$lib/server/database';

export const load: PageServerLoad = async ({ params, fetch }) => {
	const slug = params.slug;

	const response = await fetch(`/api/publications?slug=${slug}`);
	const data = await response.json();
	const publication: Publication = data?.publications?.length ? data.publications[0] : null;

	if (!publication) throw error(404, 'Form not found');
	return publication.content;
};

export const actions: Actions = {
	submit: async (event) => {
		// TODO log the user in
	}
};
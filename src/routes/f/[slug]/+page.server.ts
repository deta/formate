import type { PageServerLoad, PageServerData } from './$types';
import type { Form } from '$lib/types';
import { error } from '@sveltejs/kit';
import db from '$lib/server/database';

export const load: PageServerLoad = async ({ params }) => {
	const slug = params.slug;
	const data = (await db.forms.fetch({ slug })) as { items: unknown[] };

	if (data.items.length === 0) throw error(404, 'Not found');
	return data.items[0] as Form;
};

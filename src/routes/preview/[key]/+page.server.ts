import type { PageServerLoad } from './$types';
import type { Form } from '$lib/types';
import { error } from '@sveltejs/kit';
import db from '$lib/server/database';

export const load: PageServerLoad = async ({ params }) => {
	const key = params.key;
	const data = (await db.forms.get(key)) as unknown;

	if (!data) throw error(404, 'Not found');
	return data as Form;
};

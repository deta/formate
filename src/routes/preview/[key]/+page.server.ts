import type { PageServerLoad } from './$types';
import type { Form } from '$lib/types';
import { error } from '@sveltejs/kit';
import db from '$lib/server/database';

export const load: PageServerLoad = async ({ params, fetch }) => {
	const key = params.key;

	const response = await fetch(`/api/forms/${key}`);
	const data = (await response.json()) as { form: Form };

	if (!data?.form) throw error(404, 'Form not found');
	return data.form;
};

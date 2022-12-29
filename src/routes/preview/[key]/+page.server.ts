import type { Form } from '$lib/types';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

// Load preview form
export const load: PageServerLoad = async ({ params, fetch }) => {
	const key = params.key;

	const response = await fetch(`/api/forms/${key}`);
	const data = await response.json();

	if (!data?.form) throw error(404, 'Form not found');
	return data.form as Form;
};

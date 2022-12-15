import type { PageServerLoad } from './$types';
import type { Form } from '$lib/types';
import db from '$lib/server/database';

/**
 * Load form data & publication info
 */
export const load: PageServerLoad = async ({ params, fetch }) => {
	const request = await fetch(`/api/forms/${params.key}`);
	const data = await request.json();

	return { 
		form: data.form as Form,
		publication: {}
	};
};

import type { Form } from '$lib/types';
import type { PageServerLoad } from './$types';
import db from '$lib/server/database';
import { GET } from '$lib/http';

// Load all forms
export const load: PageServerLoad = async ({ fetch }) => {
	const request = await fetch('/api/forms');
	const data = await request.json();

	return { forms: data.forms };
};

import type { PageServerLoad } from './$types';
import type { Form } from '$lib/types';
import db from '$lib/server/database';

export const load: PageServerLoad = async ({ params }) => {
	const form = (await db.forms.get(params.key)) as unknown;
	return { form: form as Form };
};

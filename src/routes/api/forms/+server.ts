import type { RequestHandler } from './$types';
import { error, json } from '@sveltejs/kit';
import db from '$lib/server/database';

/**
 * READ Forms
 */
export const GET: RequestHandler = async () => {
	const forms = await db.forms.fetch();
	return json({ forms: forms.items });
};

/**
 * CREATE Forms
 */
export const POST: RequestHandler = async ({ request }) => {
	const data = await request.json();
	if (!data) throw error(400, { message: 'Body is not specified' });

	const form = await db.forms.insert(data);
	return json({ form });
};

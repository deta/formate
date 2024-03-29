import db from '$lib/server/database';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

/**
 * READ Forms
 */
export const GET: RequestHandler = async ({ params }) => {
	const key = params.key;
	const form = await db.forms.get(key);
	return json({ form });
};

/**
 * UPDATE Form by Key
 */
export const PUT: RequestHandler = async ({ request, params }) => {
	const key = params.key;

	const data = await request.json();
	if (!data) throw error(400, { message: 'Body is not specified' });
	if (data.key) delete data.key;

	await db.forms.delete(key);
	const form = await db.forms.insert(data, key);

	return json({ form });
};

/**
 * DELETE Form by Key
 */
export const DELETE: RequestHandler = async ({ params }) => {
	// Delete form
	await db.forms.delete(params.key);

	// Delete publication
	await db.publications.delete(params.key);

	return json({ success: true });
};

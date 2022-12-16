import type { RequestHandler } from './$types';
import { error, json } from '@sveltejs/kit';
import db from '$lib/server/database';

/**
 * READ Publication
 */
export const GET: RequestHandler = async ({ params }) => {
	const key = params.key;
	const publication = await db.publications.get(key);
	return json({ publication });
};

/**
 * UPDATE Publication by Key
 */
export const PUT: RequestHandler = async ({ request, params }) => {
	const key = params.key;
	const data = await request.json();
	if (!data) throw error(400, { message: 'Body is not specified' });

	await db.publications.delete(key);
	const publication = await db.publications.insert(data, key);

	return json({ publication });
};

/**
 * DELETE Form by Key
 */
export const DELETE: RequestHandler = async ({ params }) => {
	await db.publications.delete(params.key);
	return json({ success: true });
};

import type { RequestHandler } from './$types';
import type { Publication } from '$lib/types';
import { error, json } from '@sveltejs/kit';
import { deta } from '$lib/server/database';

/**
 * Submit form
 */
export const POST: RequestHandler = async ({ request, url, fetch }) => {
	const slug = url.searchParams.get('slug');
	if (!slug) throw error(400, { message: 'Slug is not specified' });

	const response = await fetch(`/api/publications?slug=${slug}`);
	const { publications } = (await response.json()) as { publications: Publication[] };

	// Collect all inputs columns from publication
	const columns = new Set();
	publications[0].content.screens.forEach((screen) => {
		screen.fields.forEach((field) => columns.add(field.column));
	});

	const data = await request.json();
	const inputs = data?.inputs;
	if (!inputs) throw error(400, { message: 'Data is not specified' });
	
	// Remove all unexisting inputs from data
	Object.keys(inputs).forEach((key) => {
		if (key === 'key') delete inputs.key;
		if (inputs[key] === '') delete inputs[key];
		if (!columns.has(key)) delete inputs[key];
	});

	// Insert
	const db = deta.Base(publications[0].content.table);
	await db.insert(inputs)

	return json({ success: true });
};

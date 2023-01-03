import { deta } from '$lib/server/database';
import type { Publication } from '$lib/types';
import { sanitizeInputs, validateInputs } from '$lib/validator';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

/**
 * Submit form
 */
export const POST: RequestHandler = async ({ request, url, fetch }) => {
	const slug = url.searchParams.get('slug');
	if (!slug) throw error(400, { message: 'Slug is not specified' });

	// Fetch publication
	const response = await fetch(`/api/publications?slug=${slug}`);
	const { publications } = (await response.json()) as { publications: Publication[] };

	// Get form structure
	const form = publications[0].content;

	// Prepare inp
	const data = await request.json();
	const inputs = sanitizeInputs(form, data?.inputs);
	if (!inputs) throw error(400, { message: 'Data is not specified' });

	// Validate
	const errors = validateInputs(form, inputs);
	if (Object.keys(errors).length > 0) throw error(400, { message: 'Inputs didnt passed the validation' });

	// Insert
	const db = deta.Base(publications[0].content.table);
	await db.insert(inputs)

	return json({ success: true });
};

import { deta } from '$lib/server/database';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

// Get submissions
export const GET: RequestHandler = async ({ params, url, fetch }) => {
	const tableName = url.searchParams.get('table');
	if (!tableName) throw error(400, { message: 'Table is not specified' });

	// Load data
	const db = deta.Base(tableName);
	const data = await db.fetch()
	const submissions = data.items || [];

	return json({ submissions });
}

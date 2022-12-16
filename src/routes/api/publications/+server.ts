import type { RequestHandler } from './$types';
import { error, json } from '@sveltejs/kit';
import db from '$lib/server/database';

/**
 * READ Publications
 */
export const GET: RequestHandler = async ({ url }) => {
	const slug = url.searchParams.get('slug');
	const publications = slug ? await db.publications.fetch({ slug }) : await db.publications.fetch();

	return json({ publications: publications.items });
};

/**
 * CREATE Publication
 */
export const POST: RequestHandler = async ({ request }) => {
	const data = await request.json();
	if (!data) throw error(400, { message: 'Body is not specified' });
	if (!data?.slug) throw error(400, { message: 'Slug is not specified' });

	// Find publications with the same slug
	const sameSlug = await db.publications.fetch({ slug: data.slug });

	// Remove all publications with the same slug
	if (sameSlug.items.length) {
		for (let i = 0; i < sameSlug.items.length; i++) {
			const item = sameSlug.items[i];
			await db.publications.delete(item.key as string);
		}
	}

	const publication = await db.publications.insert(data);
	return json({ publication });
};

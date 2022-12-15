import type { RequestHandler } from './$types';
import { error, json } from '@sveltejs/kit';
import db from '$lib/server/database';

/**
 * READ Publications
 */
export const GET: RequestHandler = async () => {
    const publications = await db.publications.fetch();
    return json({ publications: publications.items });
};

/**
 * CREATE Publication
 */
export const POST: RequestHandler = async ({ request }) => {
    const data = await request.json();
    if (!data) throw error(400, { message: 'Body is not specified' });

    const publication = await db.publications.insert(data);
    return json({ publication });
};

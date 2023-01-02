import md5 from 'md5';
import type { Form } from './types';

/**
 * Create URL slug
 * @param value Value to create slug from
 * @returns
 */
export function createSlug(value: string) {
	return value
		.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/[^\w-]+/g, '')
		.replace(/--+/g, '-')
		.replace(/^-+/, '')
		.replace(/-+$/, '');
}

/**
 * Generate form data hash
 * @param form Form to create hash from
 */
export function getFormHash(form: Form) {
	const content = JSON.stringify({
		key: form.key,
		name: form.name,
		slug: form.slug,
		layout: form.layout,
		css: form.css,
		color: form.color,
		screens: form.screens
	});

	return md5(content);
}


/**
 * Async sleep function
 * @param ms Time to sleep
 */
export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

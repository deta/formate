import type { Form, Publication } from '$lib/types';
import { writable } from 'svelte/store';

// Is publication creating or removing
export const loading = writable<boolean>(false);

// Current form publication
export const publication = writable<Publication | null>();

/**
 * Make form publication
 * @param form Form to publish
 */
export async function createPublication(form: Form) {
	try {
		const data: Publication = {
			key: form.key,
			slug: form.slug,
			date: Date.now(),
			content: structuredClone(form)
		};

		loading.set(true);
		publication.set(data);

		await fetch(`/api/publications/${form.key}`, {
			method: 'PUT',
			body: JSON.stringify(data),
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (error) {
		console.error(error);
	} finally {
		loading.set(false);
	}
}

/**
 * Make current form private
 * @param formKey Key of the form to unpublish
 */
export async function deletePublication(formKey: string) {
	try {
		loading.set(true);
		publication.set(null);

		await fetch(`/api/publications/${formKey}`, { method: 'DELETE' });
	} catch (error) {
		console.error(error);
	} finally {
		loading.set(false);
	}
}

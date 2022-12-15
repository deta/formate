import type { Form, Publication } from '$lib/types';
import { writable, get, derived } from 'svelte/store';
import { nanoid } from 'nanoid';
import { GET, POST, DELETE, PUT } from '$lib/http';
import { invalidateAll } from '$app/navigation';
import { browser } from '$app/environment';
import { getFormHash } from '$lib/utils';

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
            hash: getFormHash(form),
            content: form,
        }

        loading.set(true);
        publication.set(data);

        await PUT(`/api/publications/${form.key}`, data);
    } catch (error) {
        console.error(error);
    } finally {
        loading.set(false);
    }
}

/**
 * Make current form private
 */
export async function deletePublication(formKey: string) {
    try {
        loading.set(true);
        publication.set(null);
        await DELETE(`/api/publications/${formKey}`);
    } catch (error) {
        console.error(error);
    } finally {
        loading.set(false);
    }
}


import type { Form } from '$lib/types';
import { writable } from 'svelte/store';

// List of forms
export const forms = writable<Form[]>();

/**
 * 
 */
export async function fetchForms() {
    const response = await fetch('/api/forms');
    const data = await response.json();

    if (!Array.isArray(data?.forms)) throw new Error('Error fetching forms');
    forms.set(data.forms);
}  
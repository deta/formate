import type { Form } from '../types';

import { nanoid } from 'nanoid';
import { writable, get } from 'svelte/store';
import { GET, POST, DELETE, createSlug } from '../utils';
import { form, formKey, selectedScreen } from './form';
import { currentPage } from './ui';

export const formsLoading = writable(false);
export const forms = writable<Form[]>([]);


/**
 * Fetch forms from the server
 */
export async function fetchForms() {
    try {
        formsLoading.set(true);

        const response = await GET('/api/forms');
        if (!response.success) throw new Error(response.error);

        forms.set(response.forms);
        return response.forms;

    } catch (error) {
        console.error(error);
    } finally {
        formsLoading.set(false);
    }
}

/**
 * Select form
 * @param key Form key 
 */
export function selectForm(key: string) {
    const currentForms = get(forms);
    const formData = currentForms.find((form) => form.key === key);

    form.set(formData);
    formKey.set(formData.key);
    if (formData.screens.length > 0) selectedScreen.set(formData.screens.at(0).key);

    currentPage.set('dashboard');
}

/**
 * Create new form
 * @param data Form data
 */
export async function createForm(data: Partial<Form> & { name: string }) {
    try {
        // Set default values
        data.key = data.key || nanoid();
        data.font = data.font || 'system';
        data.style = data.style || 'clean';
        data.color = data.color || 'orange';
        data.slug = data.slug || createSlug(data.name);
        data.screens = data.screens || [];

        formsLoading.set(true);

        const response = await POST('/api/forms', data);
        if (!response.success) throw new Error(response.error);

        forms.update((oldForms) => [...oldForms, response.form]);
        return response.form;

    } catch (error) {
        console.error(error);
    } finally {
        formsLoading.set(false);
    }
}

/**
 * Delete form
 * @param key Form key
 */
export async function deleteForm(key: string) {
    try {
        formsLoading.set(true);

        forms.update((oldForms) => oldForms.filter((form) => form.key !== key));
        await DELETE(`/api/forms/${key}`);

    } catch (error) {
        console.error(error);
    } finally {
        formsLoading.set(false);
    }
}
import type { Form } from './types';
import { writable, derived, get } from 'svelte/store';
import md5 from 'md5';

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
 * Headless form logic
 * @param initial Initial values
 * @param validators Validators
 * @returns
 */
export function HeadlessForm<T>(initial: T, validators: { [key in keyof T]?: (value: T[key]) => void }) {
	const values = writable<T>({ ...initial });
	const errors = writable<{ [key in keyof T]?: string | undefined }>({});
	const hasErrors = derived(errors, (errors) => Object.keys(errors).length > 0);

	const resetValues = () => {
		values.set({ ...initial });
	};

	const resetErrors = () => {
		errors.set({});
	};

	const resetKeyError = (key: string) => {
		errors.update((oldValues) => {
			const newValues = { ...oldValues };
			delete newValues[key];
			return newValues;
		});
	};

	const validate = () => {
		errors.set({});
		const target = get(values);

		for (const key in target) {
			if (typeof validators[key] === 'function') {
				try {
					validators[key](target[key]);
				} catch (error) {
					errors.update((old) => ({ ...old, [key]: error.message }));
				}
			}
		}
	};

	return { values, errors, hasErrors, resetValues, resetErrors, resetKeyError, validate };
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
		style: form.style,
		css: form.css,
		color: form.color,
		screens: form.screens
	});

	return md5(content);
}
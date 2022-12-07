import { writable, derived, get } from 'svelte/store';

/**
 * Send GET request
 * @param url URL to send request
 */
export async function GET(url: string): Promise<any> {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

/**
 * Send POST request
 * @param url URL to send request
 * @param body Request body
 */
export async function POST(url: string, body?: any): Promise<any> {
    const response = await fetch(url, {
        method: 'POST',
        body: body ? JSON.stringify(body) : undefined,
        headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();
    return data;
}

/**
 * Send PUT request
 * @param url URL to send request
 * @param body Request body
 */
export async function PUT(url: string, body?: any): Promise<any> {
    const response = await fetch(url, {
        method: 'PUT',
        body: body ? JSON.stringify(body) : undefined,
        headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();
    return data;
}

/**
 * Send DELETE request
 * @param url URL to send request
 * @param body Request body
 */
export async function DELETE(url: string, body?: any): Promise<any> {
    const response = await fetch(url, {
        method: 'DELETE',
        body: body ? JSON.stringify(body) : undefined,
        headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();
    return data;
}

/**
 * Create URL slug
 * @param value Value to create slug from
 * @returns 
 */
export function createSlug(value: string) {
    return value.toLowerCase().trim().split(/\s+/g).join('-')
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
    }

    const resetErrors = () => {
        errors.set({});
    }

    const resetKeyError = (key: string) => {
        errors.update((oldValues) => {
            const newValues = { ...oldValues };
            delete newValues[key];
            return newValues;
        });
    }

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
    }

    return { values, errors, hasErrors, resetValues, resetErrors, resetKeyError, validate };
}
import { browser } from '$app/environment';
import { invalidateAll } from '$app/navigation';
import type { FieldType, Form, Screen } from '$lib/types';
import { createSlug } from '$lib/utils';
import { nanoid } from 'nanoid';
import { get, writable } from 'svelte/store';

// Current opened form
export const form = writable<Form>();

// Current opened screen
export const screen = writable<Screen | undefined>();

// Collisions of the columns names
export const columnsCollision = writable<Set<string>>(new Set());

// Find colums collisions
let columnsTimer: NodeJS.Timeout;
form.subscribe((store) => {
	if (!browser) return;
	if (!store?.screens) return;
	if (columnsTimer) clearTimeout(columnsTimer);

	columnsTimer = setTimeout(() => {
		const columns = new Set<string>();
		const collisions = new Set<string>();

		store.screens.forEach((screen) => {
			screen.fields.forEach((field) => {
				if (columns.has(field.column)) collisions.add(field.column);
				columns.add(field.column)
			});
		});

		columnsCollision.set(collisions);
	}, 300);
});

// Sync form with the server
let syncTimer: NodeJS.Timeout;
form.subscribe((store) => {
	if (!browser) return;
	if (!store?.key) return;
	if (syncTimer) clearTimeout(syncTimer);

	syncTimer = setTimeout(async () => {
		const key = store.key;
		const data = structuredClone(store);

		await fetch(`/api/forms/${key}`, {
			method: 'PUT',
			body: JSON.stringify(data),
			headers: { 'Content-Type': 'application/json' }
		});
	}, 500);
});

/**
 * Select screen
 * @param key Key of the screen
 */
export function selectScreen(key: string) {
	const formData = get(form);
	const found = formData.screens.find((screen) => screen.key === key);
	screen.set(found);
}

/**
 * Force-Save current form state to the database
 */
export async function forceSave() {
	const formData = get(form);
	if (!formData?.key) return;

	if (syncTimer) clearInterval(syncTimer);
	const key = formData.key;
	const data = structuredClone(formData);

	await fetch(`/api/forms/${key}`, {
		method: 'PUT',
		body: JSON.stringify(data),
		headers: { 'Content-Type': 'application/json' }
	});

	await invalidateAll();
}

/**
 * Add new scren
 */
export function addScreen() {
	form.update((draft) => {
		const newScreen: Screen = {
			key: nanoid(),
			title: `New screen #${draft.screens.length}`,
			description: undefined,
			fields: []
		}

		draft.screens.push(newScreen);
		screen.set(newScreen);

		return draft;
	});
}

/**
 * Remove screen
 */
export function deleteScreen(key: string) {
	form.update((draft) => {
		const screenIndex = draft.screens.findIndex((screen) => screen.key === key)

		// Delete screen
		draft.screens.splice(screenIndex, 1);

		// If current screen is deleted
		if (get(screen)?.key === key) {
			screen.set(draft.screens?.[screenIndex] || draft.screens?.at(-1) || undefined);
		}

		return draft;
	});
}

/**
 * Add new field
A */
export function addField(type: FieldType) {
	screen.update((draft) => {
		const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);
		const title = `${capitalizedType} input #${draft.fields.length}`;
		const column = createSlug(`${type} ${nanoid(4)}`);
		const key = nanoid();

		if (type === 'short') {
			draft.fields.push({
				key,
				column,
				type,
				title,
				required: false,
				initial: '',
				placeholder: ''
			});
		}

		if (type === 'long') {
			draft.fields.push({
				key,
				column,
				type,
				title,
				required: false,
				initial: '',
				placeholder: ''
			});
		}

		if (type === 'number') {
			draft.fields.push({
				key,
				column,
				type,
				title,
				required: false,
				placeholder: ''
			});
		}

		return draft;
	});
}

/**
 * Remove field from screen
 * @param key Field key
 */
export function deleteField(key: string) {
	screen.update((draft) => {
		draft.fields = draft.fields.filter((value) => value.key !== key);
		return draft;
	});
}

/**
 * Move field up or down
 * @param key Field key
 * @param direction Direction to move to
 */
export function moveField(key: string, direction: 'up' | 'down') {
	screen.update((draft) => {
		const fieldIndex = draft.fields.findIndex((field) => field.key === key);
		if (fieldIndex === -1) return draft;

		// Pick next index
		const nextFieldIndex = direction === 'up' ? fieldIndex - 1 : fieldIndex + 1;
		if (nextFieldIndex < 0 || nextFieldIndex >= draft.fields.length) return draft;

		// Swap elements
		const fieldData = draft.fields[fieldIndex];
		draft.fields.splice(fieldIndex, 1);
		draft.fields.splice(nextFieldIndex, 0, fieldData);

		return draft;
	});
}
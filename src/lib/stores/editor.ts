import type { Form, Publication } from '$lib/types';
import { writable, get, derived } from 'svelte/store';
import { nanoid } from 'nanoid';
import { GET, POST, DELETE, PUT } from '$lib/http';
import { invalidateAll } from '$app/navigation';
import { browser } from '$app/environment';
import { createSlug } from '$lib/utils';

// Current opened form
export const form = writable<Form>();

// Current selected screen
export const selectedScreen = writable<string>();

// Current selected screen index
export const selectedScreenIndex = derived([selectedScreen, form], ([screenKey, form]) => {
	const index = form?.screens?.findIndex((screen) => screen.key === screenKey);
	return index === -1 ? 0 : index;
});

// Send form updates to the server
let timer: NodeJS.Timeout;
form.subscribe((value) => {
	if (!browser) return;
	if (!value?.key) return;

	if (timer) clearInterval(timer);

	const key = value.key;
	const data = structuredClone(value);

	timer = setTimeout(() => {
		PUT(`/api/forms/${key}`, data);
	}, 500);
});

/**
 * Force-Save current form state to the database
 */
export async function forceSave() {
	const formData = get(form);
	if (!formData?.key) return;

	if (timer) clearInterval(timer);
	const key = formData.key;
	const data = structuredClone(formData);
	await PUT(`/api/forms/${key}`, data);
	await invalidateAll();
}

/**
 * Add new scren
 */
export function addScreen() {
	const screenKey = nanoid();

	form.update((value) => {
		value.screens.push({
			key: screenKey,
			title: `New screen #${value.screens.length}`,
			description: `You can put screen description here.`,
			fields: []
		});

		selectedScreen.set(screenKey);

		return value;
	});
}

/**
 * Remove screen
 */
export function deleteScreen(key: string) {
	form.update((value) => {
		value.screens = value.screens.filter((screen) => screen.key !== key);
		if (get(selectedScreen) === key) selectedScreen.set(value.screens?.at(-1)?.key);

		return value;
	});
}

/**
 * Add new field
A */
export function addField(type: string) {
	form.update((value) => {
		const screenIndex = get(selectedScreenIndex);
		const fieldsCount = value.screens[screenIndex].fields.length;
		const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);
		const title = `${capitalizedType} input #${fieldsCount}`;

		value.screens[screenIndex].fields.push({
			key: nanoid(),
			column: createSlug(`${type} ${nanoid(4)}`),
			type: type,
			title: title,
			required: false,
			initial: '',
			placeholder: ''
		});

		return value;
	});
}

/**
 * Remove field
 * @param type Field type
 */
export function deleteField(key: string) {
	form.update((value) => {
		const screenIndex = get(selectedScreenIndex);

		value.screens[screenIndex].fields = value.screens[screenIndex].fields.filter((field) => {
			return field.key !== key;
		});

		return value;
	});
}

export function moveField(key: string, direction: 'up' | 'down') {
	form.update((value) => {
		const screenIndex = get(selectedScreenIndex);
		const fields = value.screens[screenIndex].fields;

		const fieldIndex = fields.findIndex((field) => field.key === key);
		if (fieldIndex === -1) return value;

		// Pick next index
		const nextFieldIndex = direction === 'up' ? fieldIndex - 1 : fieldIndex + 1;
		if (nextFieldIndex < 0 || nextFieldIndex >= fields.length) return value;

		// Swap elements
		const fieldData = fields[fieldIndex];
		fields.splice(fieldIndex, 1);
		fields.splice(nextFieldIndex, 0, fieldData);

		value.screens[screenIndex].fields = fields;
		return value;
	});
}

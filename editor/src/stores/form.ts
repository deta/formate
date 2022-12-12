import type { Form } from '../types';
import { writable, get, derived } from 'svelte/store';
import { nanoid } from 'nanoid';
import produce, { setAutoFreeze } from 'immer';
import { GET, POST, DELETE, PUT } from '../utils';

// Disable immer auto freeze
setAutoFreeze(false);

// Current opened form
export const form = writable<Form>();

// Current selected screen
export const selectedScreen = writable<string>();

// Current selected screen index
export const selectedScreenIndex = derived([selectedScreen, form], ([screenKey, form]) => {
    return form.screens.findIndex((screen) => screen.key === screenKey);
});

let timer;

// Send updates to the server
form.subscribe((value) => {
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
    const data = structuredClone({ ...formData, key: undefined });
    await PUT(`/api/forms/${key}`, data);
}

/**
 * Add new scren
 */
export function addScreen() {
    const screenKey = nanoid();

    form.update(produce((draft) => {
        draft.screens.push({
            key: screenKey,
            title: `New screen #${draft.screens.length}`,
            description: `You can put screen description here.`,
            fields: []
        });

        selectedScreen.set(screenKey);
    }));
}

/**
 * Remove screen
 */
export function deleteScreen(key: string) {
    form.update(produce((draft) => {
        draft.screens = draft.screens.filter((screen) => screen.key !== key);
        if (get(selectedScreen) === key) selectedScreen.set(draft.screens.at(-1).key);
    }));
}

/**
 * Add new field
 * @param type Field type
 */
export function addField(type: string) {
    form.update(produce((draft) => {
        const screenIndex = get(selectedScreenIndex);

        draft.screens[screenIndex].fields.push({
            key: nanoid(),
            type: type,
            required: false,
            title: `New input field #${draft.screens[screenIndex].fields.length}`
        });
    }));
}

/**
 * Remove field
 * @param type Field type
 */
export function deleteField(key: string) {
    form.update(produce((draft) => {
        const screenIndex = get(selectedScreenIndex);

        draft.screens[screenIndex].fields = draft.screens[screenIndex].fields.filter((field) => {
            return field.key !== key;
        });
    }));
}

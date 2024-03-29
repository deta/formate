import { writable } from 'svelte/store';

export type OpenedModal = 'create_form' | 'add_field' | 'settings' | 'data';

export const openedModal = writable<OpenedModal | null>(null);
export const deleteFormCandidate = writable<string | null>(null);

/**
 * Hide all modals
 */
export function hideModals() {
	openedModal.set(null);
	deleteFormCandidate.set(null);
}

/**
 * Open create form modal
 */
export function openCreateFormModal() {
	openedModal.set('create_form');
}

/**
 * Open add field modal
 */
export function openAddFieldModal() {
	openedModal.set('add_field');
}

/**
 * Open settings modal
 */
export function openSettingsModal() {
	openedModal.set('settings');
}

/**
 * Open data modal
 */
export function openDataModal() {
	openedModal.set('data');
}

/**
 * Hide all modals
 */
export function setFormDeleteCandidate(formKey: string) {
	openedModal.set(null);
	deleteFormCandidate.set(formKey);
}

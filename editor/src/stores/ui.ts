import { writable, derived } from 'svelte/store';

export const currentPage = writable<'welcome' | 'dashboard'>('welcome');

export const isCreateModalShown = writable(false);
export const isPublishModalShown = writable(false);
export const isSettingsModalShown = writable(false);
export const isAddFieldModalShown = writable(false);

/**
 * Hide all modals
 */
export function hideAllModals() {
    isCreateModalShown.set(false);
    isPublishModalShown.set(false);
    isSettingsModalShown.set(false);
    isAddFieldModalShown.set(false);
}
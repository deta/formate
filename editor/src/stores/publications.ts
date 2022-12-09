import type { Form } from '../types';
import { writable, get } from 'svelte/store';

export const formsLoading = writable(false);
export const forms = writable<Form[]>([]);
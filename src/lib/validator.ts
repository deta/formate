import type { Form, Screen } from './types';

// TODO: Put validation logic to this section

/**
 * Initialize inputs for submission 
 * @param form Form structure
 * @param inputs Initial inputs
 * @returns 
 */
export function prepareInputs(form: Form, inputs: Record<string, unknown> = {}) {
    const newInuts: Record<string, unknown> = {};

    for (let i = 0; i < form.screens.length; i++) {
        const screen = form.screens[i];

        for (let i = 0; i < screen.fields.length; i++) {
            const field = screen.fields[i];

            newInuts[field.column] = inputs?.[field.column] || field?.initial;

            // Short and Long text fields
            if (field.type === 'short' || field.type === 'long') {
                if (typeof newInuts[field.column] !== 'string') newInuts[field.column] = '';
                continue;
            }

            // Checkbox fields
            if (field.type === 'checkbox') {
                if (typeof newInuts[field.column] !== 'boolean') newInuts[field.column] = false;
                continue;
            }

            // Number fields
            if (field.type === 'number') {
                if (typeof newInuts[field.column] !== 'number') newInuts[field.column] = undefined;
                continue;
            }
        }
    }

    return newInuts;
}

/**
 * Validate inputs for the form
 * @param form Form structure
 * @param inputs Form inputs
 */
export function validateInputs(form: Form, inputs: Record<string, unknown>) {
    let errors: Record<string, string> = {};

    for (let i = 0; i < form.screens.length; i++) {
        const screen = form.screens[i];
        const screenErrors = validateScreenInputs(screen, inputs);
        if (screenErrors) errors = { ...errors, ...screenErrors };
    }

    return errors;
}

/**
 * Validate inputs for single screen
 * @param screen Screen structure
 * @param inputs Form inputs
 */
export function validateScreenInputs(screen: Screen, inputs: Record<string, unknown>) {
    const errors: Record<string, string> = {};

    for (let i = 0; i < screen.fields.length; i++) {
        const field = screen.fields[i];
        const value = inputs?.[field.column];

        // Short & Long fields validation
        if (field.type === 'short' || field.type === 'long') {
            if (typeof value !== 'string') {
                errors[field.key] = 'Invalid value type';
                continue;
            }

            if (field.required && value.trim() === '') {
                errors[field.key] = 'This field cant be empty';
                continue;
            }

            if (field.type === 'short') {
                if (value.length > 100) {
                    errors[field.key] = 'Value must be less than 100 symbols';
                    continue;
                }
            }

            if (field.type === 'long') {
                if (value.length > 100000) {
                    errors[field.key] = 'Value must be less than 100,000 symbols';
                    continue;
                }
            }

            continue;
        }

        // Validate checkbox field
        if (field.type === 'checkbox') {
            if (typeof value !== 'boolean') {
                errors[field.key] = 'Invalid value type';
                continue;
            }

            continue;
        }

        // Validate number field
        if (field.type === 'number') {
            if (typeof value !== 'number' && typeof value !== 'undefined') {
                errors[field.key] = 'Invalid value type';
                continue;
            }

            if (field.required && typeof value === 'undefined') {
                errors[field.key] = 'This field cant be empty';
                continue;
            }

            if (field.min && value < field.min) {
                errors[field.key] = `Value cant be less than ${field.min}`;
                continue;
            }

            if (field.max && value > field.max) {
                errors[field.key] = `Value cant be greater than ${field.min}`;
                continue;
            }

            continue;
        }
    }

    return errors;
}
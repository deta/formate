/* eslint-disable @typescript-eslint/no-explicit-any */

import type { Form, Screen } from './types';
import { isRegExValid, stringToRegEx } from './utils';

// TODO: Render error page inside the renderer

// Validators
const PhoneNumberRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;
const EmailRegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const LinkRegExp = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/

/**
 * Initialize inputs for submission 
 * @param form Form structure
 * @param inputs Initial inputs
 * @returns 
 */
export function sanitizeInputs(form: Form, inputs: Record<string, any> = {}) {
    const newInputs: Record<string, any> = {};

    for (let i = 0; i < form.screens.length; i++) {
        const screen = form.screens[i];

        for (let i = 0; i < screen.fields.length; i++) {
            const field = screen.fields[i];

            newInputs[field.column] = inputs?.[field.column] || field?.initial;

            // Short and Long text fields
            if (field.type === 'short' || field.type === 'long' || field.type === 'email' || field.type === 'link' || field.type === 'phone') {
                if (typeof newInputs[field.column] !== 'string') newInputs[field.column] = '';
                continue;
            }

            // Checkbox fields
            if (field.type === 'checkbox') {
                if (typeof newInputs[field.column] !== 'boolean') newInputs[field.column] = false;
                continue;
            }

            // Number fields
            if (field.type === 'number') {
                if (typeof newInputs[field.column] !== 'number') newInputs[field.column] = null;
                continue;
            }

            // Dropdown fields
            if (field.type === 'dropdown') {
                if (typeof newInputs[field.column] !== 'string') newInputs[field.column] = field?.options?.[0];
                continue;
            }
        }
    }

    return newInputs;
}

/**
 * Validate inputs for the form
 * @param form Form structure
 * @param inputs Form inputs
 */
export function validateInputs(form: Form, inputs: Record<string, any>) {
    let errors: Record<string, string> = {};

    for (let i = 0; i < form.screens.length; i++) {
        const screen = form.screens[i];
        const screenErrors = validateScreenInputs(screen, inputs);
        errors = { ...errors, ...screenErrors };
    }

    return errors;
}

/**
 * Validate inputs for single screen
 * @param screen Screen structure
 * @param inputs Form inputs
 */
export function validateScreenInputs(screen: Screen, inputs: Record<string, any>) {
    const errors: Record<string, string> = {};

    for (let i = 0; i < screen.fields.length; i++) {
        const field = screen.fields[i];

        if (typeof field.column !== 'string' || field.column === '') continue;
        const value = inputs?.[field.column];

        // Short & Long fields validation
        if (field.type === 'short' || field.type === 'long' || field.type === 'email' || field.type === 'link' || field.type === 'phone' || field.type === 'custom') {

            // Text fields should be a string
            if (typeof value !== 'string') {
                errors[field.key] = 'Invalid value type';
                continue;
            }

            // Field must contain something if required
            if (field.required && value.trim() === '') {
                errors[field.key] = 'This field cant be empty';
                continue;
            }

            // Small text fields should be less than 100 chars
            if (field.type === 'short') {
                if (value.length > 100) {
                    errors[field.key] = 'Value must be less than 100 symbols';
                    continue;
                }
            }

            // Long text should be less than 100k chars
            if (field.type === 'long') {
                if (value.length > 100000) {
                    errors[field.key] = 'Value must be less than 100,000 symbols';
                    continue;
                }
            }

            // Check if email valid
            if (field.type === 'email') {
                if (!EmailRegExp.test(value) && value.trim() !== '') {
                    errors[field.key] = 'Invalid email address';
                    continue;
                }
            }

            // Check if email valid
            if (field.type === 'link') {
                if (!LinkRegExp.test(value) && value.trim() !== '') {
                    errors[field.key] = 'Invalid URL';
                    continue;
                }
            }

            // Check if email valid
            if (field.type === 'phone') {
                if (!PhoneNumberRegExp.test(value) && value.trim() !== '') {
                    errors[field.key] = 'Invalid phone number';
                    continue;
                }
            }

            // Check input with custom validator
            if (field.type === 'custom') {
                if (isRegExValid(field.validator) && value.trim() !== '') {
                    if (!stringToRegEx(field.validator).test(value)) errors[field.key] = `Invalid value that does not qualify for the following regular expression: ${field.validator}`;
                    continue;
                }
            }
        }

        // Validate checkbox field
        if (field.type === 'checkbox') {

            // Field must be a boolean
            if (typeof value !== 'boolean') {
                errors[field.key] = 'Invalid value type';
                continue;
            }
        }

        // Validate number field
        if (field.type === 'number') {

            // Field must be a number
            if (typeof value !== 'number' && value !== null) {
                errors[field.key] = 'Invalid value type';
                continue;
            }

            // If field required, check 
            if (field.required && typeof value !== 'number') {
                errors[field.key] = 'This field cant be empty';
                continue;
            }

            // Value should be more than min param
            if (field.min && value < field.min) {
                errors[field.key] = `Value cant be less than ${field.min}`;
                continue;
            }

            // Value should be less than max param
            if (field.max && value > field.max) {
                errors[field.key] = `Value cant be greater than ${field.max}`;
                continue;
            }
        }

        // Dropdown validation
        if (field.type === 'dropdown' && field.options.length > 0) {

            // Field must be a string
            if (typeof value !== 'string') {
                errors[field.key] = 'Invalid value type';
                continue;
            }

            // If value is not an option
            if (!field.options.includes(value)) {
                errors[field.key] = 'The selected value is not in the options list';
                continue;
            }
        }
    }

    return errors;
}
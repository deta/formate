import type { fieldsMetadata } from './metadata';

/**
 * Form styling variant
 */
export type Layout = 'clean' | 'framed' | 'long';

/**
 * Elements color scheme
 */
export type ColorScheme = 'red' | 'orange' | 'green' | 'blue' | 'purple';

/**
 * Form screen type
 */
export interface Screen {
	key: string;
	title: string;
	description: string;
	fields: Field[];
}

/**
 * Form structure
 */
export interface Form {
	key: string;
	name: string;
	slug: string;
	layout: Layout;
	color: ColorScheme;
	table: string;
	css?: string;
	screens: Screen[];
}

/**
 * Publication structure
 */
export interface Publication {
	key: string;
	date: number;
	slug: string;
	content: Form;
}

/**
 * Type of the field
 */
export type FieldType = keyof typeof fieldsMetadata;

/**
 * All fields
 */
export type Field = ShortTextField | LongTextField | NumberField | CheckboxField;

/**
 * Base Field structure
 */
export interface BaseField {
	key: string;
	column: string;
	title: string;
	type: FieldType;
}

export interface ShortTextField extends BaseField {
	type: 'short';
	initial?: string;
	placeholder: string;
	required: boolean;
}

export interface LongTextField extends BaseField {
	type: 'long';
	initial?: string;
	placeholder: string;
	required: boolean;
}

export interface NumberField extends BaseField {
	type: 'number';
	initial?: number;
	placeholder: string;
	required: boolean;
	min?: number;
	max?: number;
}

export interface CheckboxField extends BaseField {
	type: 'checkbox';
	initial: boolean;
}
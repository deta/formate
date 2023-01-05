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
export type Field = ShortTextField | LongTextField | NumberField | CheckboxField | LinkField | PhoneField | EmailField | DropdownField | CustomField;

/**
 * Base Field structure
 */
export interface BaseField {
	key: string;
	column: string;
	title: string;
	type: FieldType;
}

export interface TextField extends BaseField {
	initial?: string;
	placeholder: string;
	required: boolean;
}

export interface ShortTextField extends TextField {
	type: 'short';
}

export interface LongTextField extends TextField {
	type: 'long';
}

export interface EmailField extends TextField {
	type: 'email';
}

export interface PhoneField extends TextField {
	type: 'phone';
}

export interface LinkField extends TextField {
	type: 'link';
}

export interface CustomField extends TextField {
	type: 'custom';
	validator: string;
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

export interface DropdownField extends BaseField {
	type: 'dropdown';
	initial?: string;
	placeholder: string;
	options: string[];
}

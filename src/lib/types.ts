import type { fieldsData } from './fields';

export interface InputField {
	key: string;
	column: string;
	type: string;
	title: string;
	initial: string;
	placeholder: string;
	required: boolean;
}

/**
 * Form styling variant
 */
export type Style = 'clean' | 'framed' | 'long';

/**
 * Elements color scheme
 */
export type ColorScheme = 'red' | 'orange' | 'green' | 'blue' | 'purple';

/**
 * Type of the field
 */
export type FieldType = keyof typeof fieldsData;

export type Field = InputField;

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
	style: Style;
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


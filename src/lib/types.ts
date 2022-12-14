export interface InputField {
	key: string;
	type: string;
	title: string;
	defaultValue: string;
	fieldKey: string;
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

export type Field = InputField;

export interface Screen {
	key: string;
	title: string;
	description: string;
	fields: Field[];
}

export interface Form {
	key: string;
	name: string;
	slug: string;
	font: string;
	style: Style;
	color: ColorScheme;
	css?: string;
	screens: Screen[];
}

export interface Publication {
	key: string;
	form: string;
	date: string;
	slug: string;
	content: string;
}

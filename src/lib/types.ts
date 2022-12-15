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
	hash: string;
	update: number;
	name: string;
	slug: string;
	style: Style;
	color: ColorScheme;
	css?: string;
	screens: Screen[];
}

export interface Publication {
	key: string;
	hash: string;
	update: number;
	slug: string;
	content: string;
}

export const fieldTypes = {
	short: {
		name: 'Short Text'
	},
	long: {
		name: 'Long Text'
	},
	number: {
		name: 'Number'
	},
	checkbox: {
		name: 'Checkbox'
	},
	dropdown: {
		name: 'Dropdown'
	},
	select: {
		name: 'Select'
	},
	email: {
		name: 'Email'
	},
	phone: {
		name: 'Phone Number'
	},
	link: {
		name: 'Link'
	}
};

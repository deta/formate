export interface InputField {
    type: string;
}

export type Style = 'clean' | 'framed' | 'long';

export type ColorScheme = 'red' | 'orange' | 'green' | 'blue' | 'purple';

export type Field = InputField;

export interface Question {
    key: string;
    question: string;
    description: string;
    fields: Field[]
}

export interface Form {
    key: string;
    name: string;
    slug: string;
    font: string;
    style: Style;
    color: ColorScheme;
    css?: string;
    questions: Question[];
}

export interface Publication {
    key: string;
    form: string;
    date: string;
    public: boolean;
    content: string;
}
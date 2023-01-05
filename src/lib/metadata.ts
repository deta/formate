import Checkbox from '$lib/components/icons/Checkbox.svelte';
import Link from '$lib/components/icons/Link.svelte';
// import ListCheck from '$lib/components/icons/ListCheck.svelte';
import Mail from '$lib/components/icons/Mail.svelte';
import Phone from '$lib/components/icons/Phone.svelte';
import Selector from '$lib/components/icons/Selector.svelte';
import SortNumbers from '$lib/components/icons/SortNumbers.svelte';
import Cursor from './components/icons/Cursor.svelte';
import Hammer from './components/icons/Hammer.svelte';
import Paragraph from './components/icons/Paragraph.svelte';

interface FieldMetadata {
    name: string;
    description: string;
    icon: typeof Cursor;
}

// List of all fields metadata
export const fieldsMetadata: Record<string, FieldMetadata> = {
    short: {
        name: 'Short Text',
        description: 'Small text input for less than 100 symbols.',
        icon: Cursor,
    },
    long: {
        name: 'Long Text',
        description: 'Big text input for less than 100,000 symbols.',
        icon: Paragraph,
    },
    number: {
        name: 'Number',
        description: 'Input for numbers.',
        icon: SortNumbers,
    },
    checkbox: {
        name: 'Checkbox',
        description: 'Input for true / false value.',
        icon: Checkbox,
    },
    dropdown: {
        name: 'Dropdown',
        description: 'Input for selection one of the predefined options.',
        icon: Selector,
    },
    // select: {
    //     name: 'Select',
    //     description: 'Input for selection one or multiple values.',
    //     icon: ListCheck,
    // },
    email: {
        name: 'Email',
        description: 'Input for Email adresses.',
        icon: Mail,
    },
    phone: {
        name: 'Phone Number',
        description: 'Input for Phone numbers.',
        icon: Phone,
    },
    link: {
        name: 'Link',
        description: 'Input for HTTP links.',
        icon: Link,
    },
    custom: {
        name: 'Custom Field',
        description: 'Input with the custom RegEx validation.',
        icon: Hammer,
    },
};
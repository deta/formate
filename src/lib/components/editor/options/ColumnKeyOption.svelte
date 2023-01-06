<script lang="ts">
	import Key from '$lib/components/icons/Key.svelte';
	import Input from '$lib/components/Input.svelte';
	import Label from '$lib/components/Label.svelte';
	import { columnsCollision } from '$lib/stores/editor';
	import { createSlug } from '$lib/utils';
	import { nanoid } from 'nanoid';

	// Column key value
	export let column: string;

	/**
	 * On option blur
	 */
	function onBlur() {
		if (column === '') column = nanoid(6);
		column = createSlug(column, '_');
	}
</script>

<div>
	<Label title="Column Key" description="The key that will be used to store the value in the database" required />
	<Input
		bind:value={column}
		on:blur={onBlur}
		placeholder="Unique value, that will be used as a column key"
		warning={$columnsCollision.has(column) && 'The column key must be unique across the entire form'}
		error={column === '' && 'Column key cant be empty'}
		icon={Key}
		small
	/>
</div>

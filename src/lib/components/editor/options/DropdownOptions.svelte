<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Container from '$lib/components/Container.svelte';
	import Dropdown from '$lib/components/Dropdown.svelte';
	import EditableText from '$lib/components/EditableText.svelte';
	import Key from '$lib/components/icons/Key.svelte';
	import Input from '$lib/components/Input.svelte';
	import Label from '$lib/components/Label.svelte';
	import List from '$lib/components/List.svelte';
	import { columnsCollision } from '$lib/stores/editor';
	import type { DropdownField } from '$lib/types';

	// Field data
	export let field: DropdownField;

	/**
	 * Add new option
	 */
	function addOption() {
		field.options.push(`Dropdown option #${field.options.length}`);
		field = field;
	}

	/**
	 * Delete option
	 * @param index Index of the option
	 */
	function deleteOption(index: number) {
		field.options.splice(index, 1);
		field = field;
	}

	/**
	 * Remove all empty options
	 */
	function removeEmptyOptions() {
		field.options = field.options.filter((option) => option !== '');
	}
</script>

<Container>
	<div>
		<Label title="Column Key" description="The key that will be used to store the value in the database" required />
		<Input
			bind:value={field.column}
			placeholder="Unique value, that will be used as a column key"
			warning={$columnsCollision.has(field.column) && 'The column key must be unique across the entire form'}
			icon={Key}
			small
		/>
	</div>
</Container>

<Container>
	<div>
		<Label title="Default Value" />
		<Dropdown bind:value={field.initial} disabled={field.options.length === 0} options={field.options} placeholder="Nothing to select" />
	</div>
	<div>
		<Label title="Placeholder" />
		<Input small bind:value={field.placeholder} placeholder="Filler text" />
	</div>
</Container>

<Container>
	<div>
		<Label title="Options" required />

		<List small let:index items={field.options} on:delete={({ detail }) => deleteOption(detail.index)}>
			<EditableText bind:value={field.options[index]} on:blur={removeEmptyOptions} />
		</List>

		<Button small style="neutral" position="right" fullWidth on:click={addOption}>Add Option</Button>
	</div>

	<div />
</Container>

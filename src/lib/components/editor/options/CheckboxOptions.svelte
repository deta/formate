<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Key from '$lib/components/icons/Key.svelte';
	import Input from '$lib/components/Input.svelte';
	import Label from '$lib/components/Label.svelte';
	import Toggle from '$lib/components/Toggle.svelte';
	import { columnsCollision } from '$lib/stores/editor';
	import type { CheckboxField } from '$lib/types';

	// Field data
	export let field: CheckboxField;
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
		<Toggle small bind:value={field.initial} />
	</div>

	<div />
	<div />
</Container>

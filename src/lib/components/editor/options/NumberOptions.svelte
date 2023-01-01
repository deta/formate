<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Input from '$lib/components/Input.svelte';
	import Label from '$lib/components/Label.svelte';
	import Toggle from '$lib/components/Toggle.svelte';
	import { columnsCollision } from '$lib/stores/editor';
	import type { NumberField } from '$lib/types';

	// Field data
	export let field: NumberField;
</script>

<Container>
	<div>
		<Label title="Column" required />
		<Input
			bind:value={field.column}
			placeholder="Unique value, that will be used as a column key"
			warning={$columnsCollision.has(field.column) && 'Value must be unique across all screens'}
		/>
	</div>
	<div>
		<Label title="Is Required" />
		<Toggle bind:value={field.required} />
	</div>
</Container>

<Container>
	<div>
		<Label title="Default Value" />
		<Input type="number" bind:value={field.initial} placeholder="Initial input value" />
	</div>
	<div>
		<Label title="Placeholder" />
		<Input bind:value={field.placeholder} placeholder="Filler text" />
	</div>
</Container>

<Container>
	<div>
		<Label title="Min Value" />
		<Input type="number" bind:value={field.min} placeholder="Minimum possible value" />
	</div>
	<div>
		<Label title="Max Value" />
		<Input type="number" bind:value={field.max} placeholder="Maximum possible value" />
	</div>
</Container>

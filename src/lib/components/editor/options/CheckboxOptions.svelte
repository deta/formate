<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Label from '$lib/components/Label.svelte';
	import Toggle from '$lib/components/Toggle.svelte';
	import type { CheckboxField } from '$lib/types';
	import ColumnKeyOption from './ColumnKeyOption.svelte';

	// Field data
	export let field: CheckboxField;
</script>

<Container>
	<ColumnKeyOption bind:column={field.column} />
</Container>

<Container>
	<div>
		<Label title="Default Value" />
		<Toggle small bind:value={field.initial} />
	</div>

	<div />
	<div />
</Container>

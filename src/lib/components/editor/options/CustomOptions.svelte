<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Input from '$lib/components/Input.svelte';
	import Label from '$lib/components/Label.svelte';
	import Toggle from '$lib/components/Toggle.svelte';
	import type { CustomField } from '$lib/types';
	import { isRegExValid } from '$lib/utils';
	import ColumnKeyOption from './ColumnKeyOption.svelte';

	// Field data
	export let field: CustomField;
</script>

<Container>
	<ColumnKeyOption bind:column={field.column} />
</Container>

<Container>
	<div>
		<Label title="Validator" description="Custom regular expression, that will be used to validate input value." required />
		<Input
			bind:value={field.validator}
			placeholder="/formate is (super|ultra) cool/i"
			error={field.validator !== '' && !isRegExValid(field.validator) && 'Invalid regular expression'}
			small
		/>
	</div>
</Container>

<Container>
	<div>
		<Label title="Default Value" />
		<Input small bind:value={field.initial} placeholder="Initial input value" />
	</div>
	<div>
		<Label title="Placeholder" />
		<Input small bind:value={field.placeholder} placeholder="Filler text" />
	</div>
	<div>
		<Label title="Is Required" />
		<Toggle small bind:value={field.required} />
	</div>
</Container>

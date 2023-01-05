<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Key from '$lib/components/icons/Key.svelte';
	import Input from '$lib/components/Input.svelte';
	import Label from '$lib/components/Label.svelte';
	import Toggle from '$lib/components/Toggle.svelte';
	import { columnsCollision } from '$lib/stores/editor';
	import type { EmailField, LinkField, LongTextField, PhoneField, ShortTextField } from '$lib/types';

	// Field data
	export let field: ShortTextField | LongTextField | EmailField | LinkField | PhoneField;
</script>

<Container>
	<div>
		<Label title="Column" required />
		<Input
			bind:value={field.column}
			placeholder="Unique value, that will be used as a column key"
			warning={$columnsCollision.has(field.column) && 'Value must be unique across all screens'}
			icon={Key}
			small
		/>
	</div>
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

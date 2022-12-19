<script lang="ts">
	import { fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { addField } from '$lib/stores/editor';

	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import EditableText from '$lib/components/EditableText.svelte';
	import FieldEditor from '$lib/components/FieldEditor.svelte';
	import Input from '$lib/components/Input.svelte';
	import Label from '$lib/components/Label.svelte';
	import { form, addScreen, selectedScreen, deleteScreen, selectedScreenIndex } from '$lib/stores/editor';
	import { openAddFieldModal } from '$lib/stores/modals';
	import Toggle from './Toggle.svelte';
	import { browser } from '$app/environment';

	// Update color scheme of the editor
	$: if (browser && $form.color) {
		document.documentElement.className = '';
		document.documentElement.classList.add($form.color);
	}

	function addFieldTemp() {
		addField('short')
	}

	let errors = {};
</script>

<div class="editor">
	<div class="sidebar" in:fly={{ delay: 300, x: -16 }}>
		{#each $form.screens as screen, index (screen.key)}
			<Card
				title={screen.title}
				description={screen.description}
				selected={$selectedScreen === screen.key || $selectedScreenIndex === index}
				on:click={() => ($selectedScreen = screen.key)}
				on:delete={() => deleteScreen(screen.key)}
			/>
		{/each}

		<Button position="centered" on:click={addScreen}>Add Screen</Button>
	</div>

	{#if $form.screens[$selectedScreenIndex]}
		{#key $selectedScreenIndex}
			<div class="fields">
				<div class="field" in:fly={{ x: -8 }}>
					<h3>
						<EditableText bind:value={$form.screens[$selectedScreenIndex].title} />
					</h3>
					<p>
						<EditableText bind:value={$form.screens[$selectedScreenIndex].description} />
					</p>
				</div>

				{#each $form.screens[$selectedScreenIndex].fields as field, index (field.key)}
					<div animate:flip={{ duration: 300 }}>
						<FieldEditor bind:field {index}>
							<div class="container">
								<div>
									<Label title="Column" required />
									<Input bind:value={field.column} placeholder="Unique value, that will be used as a column key" />
								</div>
								<div>
									<Label title="Is Required" />
									<Toggle bind:value={field.required}  />
								</div>
							</div>
							<div class="container">
								<div>
									<Label title="Default Value" />
									<Input bind:value={field.initial} placeholder="Initial input value" />
								</div>
								<div>
									<Label title="Placeholder" />
									<Input bind:value={field.placeholder} placeholder="Filler text" />
								</div>
							</div>
						</FieldEditor>
					</div>
				{/each}

				<div class="buttons">
					<Button position="right" style="neutral" on:click={addFieldTemp}>Add Field</Button>
				</div>
			</div>
		{/key}
	{/if}
</div>

<style>
	.editor {
		height: calc(100vh - 4rem);
		display: flex;
		flex-direction: row;
	}

	.sidebar {
		display: flex;
		flex-direction: column;
		overflow-x: hidden;
		overflow-y: auto;
		height: 100%;
		width: 100%;
		max-width: 20rem;
		padding: 2rem;
		padding-bottom: 4rem;
		background-color: var(--background);
		border-right: 1px solid;
		border-color: var(--border);
	}

	.fields {
		width: 100%;
		display: flex;
		overflow-y: auto;
		overflow-x: hidden;
		flex-direction: column;
		padding-bottom: 4rem;
	}

	.field {
		padding: 2rem 2.25rem;
		border-bottom: 1px solid;
		border-color: var(--border);
	}

	.buttons {
		padding: 1rem 2.25rem;
	}

	h3 {
		all: unset;
		display: block;
		font-size: 1.5rem;
		font-weight: 800;
		padding-bottom: 0.25rem;
	}

	p {
		all: unset;
		display: block;
		font-size: 1.5rem;
		font-weight: 300;
	}

	.container {
		display: flex;
		flex-direction: row;
		width: 100%;
		gap: 1.5rem;
	}

	.container > * {
		width: 100%;
	}

	@media screen and (max-width: 800px) {
		.container {
			flex-direction: column;
		}
	}
</style>

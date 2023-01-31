<script lang="ts">
	import { browser } from '$app/environment';
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';
	import Label from '$lib/components/Label.svelte';
	import type { Form } from '$lib/types';
	import { sleep } from '$lib/utils';
	import { sanitizeInputs, validateScreenInputs } from '$lib/validator';
	import { createEventDispatcher, onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import Dropdown from '../Dropdown.svelte';
	import Link from '../icons/Link.svelte';
	import Mail from '../icons/Mail.svelte';
	import Phone from '../icons/Phone.svelte';
	import SortNumbers from '../icons/SortNumbers.svelte';
	import TextArea from '../TextArea.svelte';
	import Toggle from '../Toggle.svelte';

	const TRANSITION_SPEED = 200;

	// Dispatch events
	const dispatch = createEventDispatcher<{ submit: Record<string, any> }>();

	// Form data
	export let form: Form;

	// Inputs data
	export let inputs = {};

	// Inputs data
	export let errors = {};

	// Is form finished
	export let finished = form.screens.length === 0;

	// Current opened screen
	let currentScreenIndex = 0;

	// Is form visible
	let visible = false;

	// Reset values if form changes
	$: if (form) {
		if (!form.screens[currentScreenIndex]) {
			currentScreenIndex = 0;
			inputs = sanitizeInputs(form, inputs);
		}
	}

	// Current screen
	$: screen = form?.screens?.[currentScreenIndex];

	// Check if errors exists
	$: hasErrors = Object.keys(errors).length > 0;

	// Append global styles
	if (browser && form?.css) {
		const element = document.createElement('style');
		element.textContent = form.css;
		document.head.append(element);
	}

	// On renderer mount
	onMount(() => {
		inputs = sanitizeInputs(form, inputs);
		setTimeout(() => (visible = true), TRANSITION_SPEED);
	});

	/**
	 * Reset field error
	 * @param key Field key
	 */
	function cleanError(key: string) {
		delete errors[key];
		errors = errors;
	}

	/**
	 * Go to previous screen
	 */
	async function back() {
		visible = false;
		await sleep(TRANSITION_SPEED);

		errors = {};
		if (currentScreenIndex > 0) currentScreenIndex -= 1;

		await sleep(TRANSITION_SPEED);
		visible = true;
	}

	/**
	 * Go to next screen
	 */
	async function next() {
		// Validate
		errors = validateScreenInputs(screen, inputs);
		if (Object.keys(errors).length > 0) return;

		visible = false;
		await sleep(TRANSITION_SPEED);

		// Submit
		if (currentScreenIndex >= form.screens.length - 1) {
			finished = true;
			dispatch('submit', sanitizeInputs(form, inputs));
		} else {
			currentScreenIndex += 1;
		}

		await sleep(TRANSITION_SPEED);
		visible = true;
	}
</script>

<svelte:head>
	<title>{form.name}</title>
</svelte:head>

<div class="wrapper {form.color} {form.layout}">
	<div class="container">
		{#if !finished}
			<div class="form" class:hidden={!visible} style:transition="{TRANSITION_SPEED}ms ease">
				<div class="heading">
					{#if screen?.title}
						<h2>{screen.title}</h2>
					{/if}

					{#if screen?.description}
						<p>{screen.description}</p>
					{/if}
				</div>

				<div class="fields">
					{#each screen.fields as field (field.key)}
						<div>
							<Label title={field.title} required={'required' in field && field.required} />
							{#if field.type === 'short'}
								<Input
									placeholder={field?.placeholder}
									error={errors[field.key]}
									bind:value={inputs[field.column]}
									on:keyup={() => cleanError(field.key)}
								/>
							{:else if field.type === 'long'}
								<TextArea
									placeholder={field?.placeholder}
									error={errors[field.key]}
									bind:value={inputs[field.column]}
									on:keyup={() => cleanError(field.key)}
								/>
							{:else if field.type === 'number'}
								<Input
									type="number"
									placeholder={field?.placeholder}
									error={errors[field.key]}
									icon={SortNumbers}
									bind:value={inputs[field.column]}
									on:keyup={() => cleanError(field.key)}
								/>
							{:else if field.type === 'checkbox'}
								<Toggle bind:value={inputs[field.column]} />
							{:else if field.type === 'email'}
								<Input
									placeholder={field?.placeholder}
									error={errors[field.key]}
									icon={Mail}
									bind:value={inputs[field.column]}
									on:keyup={() => cleanError(field.key)}
								/>
							{:else if field.type === 'phone'}
								<Input
									placeholder={field?.placeholder}
									error={errors[field.key]}
									icon={Phone}
									bind:value={inputs[field.column]}
									on:keyup={() => cleanError(field.key)}
								/>
							{:else if field.type === 'link'}
								<Input
									placeholder={field?.placeholder}
									error={errors[field.key]}
									icon={Link}
									bind:value={inputs[field.column]}
									on:keyup={() => cleanError(field.key)}
								/>
							{:else if field.type === 'dropdown'}
								<Dropdown
									bind:value={inputs[field.column]}
									options={field.options}
									placeholder={field?.placeholder}
									error={errors[field.key]}
									disabled={field.options.length === 0}
								/>
							{:else if field.type === 'custom'}
								<Input
									placeholder={field?.placeholder}
									error={errors[field.key]}
									bind:value={inputs[field.column]}
									on:keyup={() => cleanError(field.key)}
								/>
							{/if}
						</div>
					{/each}
				</div>

				<div class="buttons">
					{#if currentScreenIndex !== 0}
						<Button on:click={back} style="neutral">Previous</Button>
					{/if}

					<Button on:click={next} disabled={hasErrors}>
						{currentScreenIndex === form.screens.length - 1 ? 'Submit' : 'Next'}
					</Button>
				</div>
			</div>
		{:else}
			<div class="form finished" class:hidden={!visible}>
				<div>
					<div class="icon">🎉</div>
					<h3>Thanks!</h3>
					<p>Your data was successfully submited!</p>
				</div>
			</div>

			<div class="info" in:fly={{ duration: 500, delay: 500, y: 64 }}>
				<span in:fly={{ duration: 500, y: 8, delay: 700 }}>Built with</span>
				<a href="https://deta.space/discovery/@kirlovon/formate" in:fly={{ duration: 500, y: 8, delay: 800 }}>Formate</a>
				<span in:fly={{ duration: 500, y: 8, delay: 900 }}>, powered by</span>
				<a href="https://deta.space/" in:fly={{ duration: 500, y: 8, delay: 1000 }}>Deta Space</a>
			</div>
		{/if}
	</div>
</div>

<style>
	h3,
	h2,
	p,
	a {
		all: unset;
	}

	h2 {
		font-weight: 600;
		font-size: 2rem;
		line-height: 2.25rem;
	}

	p {
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 300;
	}

	a {
		color: var(--accent);
		font-weight: 600;
		cursor: pointer;
	}

	a:hover {
		text-underline-offset: 0.25rem;
		text-decoration: underline;
	}

	.wrapper {
		width: 100%;
		min-height: 100vh;
		overflow-x: hidden;
		overflow-y: auto;
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		min-height: 50vh;
		padding: 2rem;
	}

	.form {
		color: var(--text);
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 3rem;
		padding: 4rem;
		padding-bottom: 5rem;
		width: 100%;
		max-width: 40rem;
		border-radius: 1rem;
		background-color: white;
		transition: 0.2s ease;
	}

	.form.hidden {
		opacity: 0;
		pointer-events: none;
		transform: translateY(0.5rem);
	}

	.fields {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.heading {
		gap: 0.5rem;
		display: flex;
		flex-direction: column;
	}

	.finished {
		text-align: center;
	}

	.icon {
		font-size: 6rem;
		margin-bottom: 1rem;
	}

	.finished h3 {
		all: unset;
		display: block;
		font-weight: bold;
		font-size: 3rem;
		line-height: 4rem;
	}

	.finished p {
		display: block;
		font-size: 1.25rem;
		line-height: 1.5rem;
		font-weight: 300;
	}

	.info {
		position: fixed;
		bottom: 0;
		display: flex;
		justify-content: center;
		width: 100%;
		margin: 0 auto;
		gap: 0.25rem;
		text-align: center;
		font-style: italic;
		font-size: 1rem;
		font-weight: 300;
		margin-top: 3rem;
		text-align: center;
		padding: 1rem 1.25rem;
		background-color: white;
	}

	.info > * {
		display: block;
	}

	.buttons {
		margin-left: auto;
		display: flex;
		gap: 1rem;
		flex-direction: row;
	}

	/* Framed form style */

	.framed {
		background-color: var(--accent);
	}

	/* Long form style */

	.long {
		background-color: var(--accent);
	}

	.long .container {
		padding-top: 0;
		padding-bottom: 0;
	}

	.long .form {
		border-radius: 0;
		min-height: 100vh;
	}

	.long .form.hidden {
		transform: none;
	}

	.long .finished {
		border-radius: 0;
		min-height: 100vh;
	}

	.long .info {
		width: fit-content;
	}

	@media screen and (max-width: 800px) {
		.form {
			padding: 3rem;
			padding-bottom: 4rem;
		}
	}
</style>

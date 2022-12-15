<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';
	import Label from '$lib/components/Label.svelte';
	import type { Form } from '$lib/types';

	// Dispatch events
	const dispatch = createEventDispatcher<{ submit: Record<string, any> }>();

	// Form data
	export let form: Form;

	// Inputs data
	export let inputs = {};

	// Is form finished
	export let finished = form.screens.length === 0;

	// Current opened screen
	let currentScreenIndex = 0;

	// Is form visible
	let visible = false;

	// Current screen
	$: screen = form?.screens?.[currentScreenIndex];

	/**
	 * Go to previous screen
	 */
	function back() {
		if (!visible) return;
		visible = false;

		setTimeout(() => {
			if (currentScreenIndex > 0) currentScreenIndex -= 1;
			visible = true;
		}, 300);
	}

	/**
	 * Go to next screen
	 */
	function next() {
		if (!visible) return;
		visible = false;

		setTimeout(() => {
			currentScreenIndex += 1;

			if (currentScreenIndex >= form.screens.length) {
				finished = true;

				dispatch('submit', inputs);

				// await fetch('/api/submit', {
				// 	method: 'POST',
				// 	body: JSON.stringify(inputs),
				// 	headers: {
				// 		Accept: 'application/json',
				// 		'Content-Type': 'application/json'
				// 	}
				// });
			}

			visible = true;
		}, 300);
	}

	onMount(() => {
		setTimeout(() => {
			visible = true;
		}, 300);
	});
</script>

<svelte:head>
	<title>{form.name}</title>
</svelte:head>

<div class="wrapper {form.color}">
	{#if visible}
		{#if !finished}
			<div class="form" in:fly={{ duration: 200, y: 8 }} out:fly={{ duration: 200, y: -8 }}>
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
							<Label title={field.title} />
							<Input placeholder={field?.placeholder} bind:value={inputs[field.fieldKey]} />
						</div>
					{/each}
				</div>

				<div class="buttons">
					{#if currentScreenIndex > 0}
						<Button on:click={back} style="neutral">Previous</Button>
					{/if}

					<Button on:click={next}>
						{currentScreenIndex === form.screens.length - 1 ? 'Submit' : 'Next question'}
					</Button>
				</div>
			</div>
		{:else}
			<div class="card finished" transition:fly={{ duration: 500, y: 8 }}>
				<div class="icon">🎉</div>
				<h3>Thanks!</h3>
				<p>Your data was successfully sent! Thanks for filling in!</p>
			</div>

			<div class="info" in:fly={{ duration: 500, delay: 500 }}>
				<span in:fly={{ duration: 500, y: 8, delay: 600 }}>Built with</span>
				<a href="https://alpha.deta.space/discovery/@kirlovon/formate" in:fly={{ duration: 500, y: 8, delay: 700 }}>Formate</a>
				<span in:fly={{ duration: 500, y: 8, delay: 800 }}>, powered by</span>
				<a href="https://alpha.deta.space/" in:fly={{ duration: 500, y: 8, delay: 900 }}>Deta Space</a>
			</div>
		{/if}
	{/if}
</div>

<style>
	h2,
	p,
	a {
		all: unset;
	}

	h2 {
		font-weight: 600;
		font-size: 2.5rem;
		line-height: 3rem;
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
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		min-height: 50vh;
		padding: 2rem;
	}

	.form {
		color: #636363;
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 3rem;
		padding: 3rem;
		padding-bottom: 4rem;
		width: 100%;
		max-width: 40rem;
		border-radius: 1rem;
		background-color: white;
	}

	.fields {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.heading {
		gap: 1rem;
		display: flex;
		flex-direction: column;
	}

	.finished {
		text-align: center;
	}

	.icon {
		font-size: 6rem;
	}

	.finished h3 {
		all: unset;
		display: block;
		font-weight: bold;
		font-size: 6rem;
	}

	.finished p {
		all: unset;
		display: block;
		font-size: 1rem;
		font-weight: 300;
	}

	.card {
		padding: 4rem;
		border-radius: 1rem;
		background-color: white;
	}

	.preview {
		position: fixed;
		top: 1rem;
		right: 1rem;
	}

	.info {
		display: flex;
		gap: 0.25rem;
		text-align: center;
		font-style: italic;
		font-size: 0.75rem;
		font-weight: 300;
		margin-top: 1rem;
		border: 2px solid;
		border-radius: 0.5rem;
		padding: 1rem 1.25rem;
		box-shadow: 0 0 2rem -0.25rem var(--neutral);
		border-color: var(--accent);
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
</style>

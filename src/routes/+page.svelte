<script lang="ts">
	import type { PageData } from './$types';
	import { fly, slide } from 'svelte/transition';
	import { onMount } from 'svelte';


	import Animation from '$lib/components/Animation.svelte';
	import Button from '$lib/components/Button.svelte';
	import Plus from '$lib/components/icons/Plus.svelte';
	import TrashBin from '$lib/components/icons/TrashBin.svelte';
	import CreateModal from '$lib/components/modals/CreateModal.svelte';
	import DeleteFormModal from '$lib/components/modals/DeleteFormModal.svelte';
	import { deleteFormCandidate, hideModals, openCreateFormModal, openedModal, setFormDeleteCandidate } from '$lib/stores/modals';
	import { afterNavigate } from '$app/navigation';

	export let data: PageData;

	$: forms = data.forms;

	// Reset styles to default ones
	onMount(() => {
		document.documentElement.className = '';
		hideModals();
	});

	afterNavigate((navigation) => {
		if (navigation?.from?.route?.id) animationFinished = true;
		console.log(navigation);
	})
	// Show UI on animation finish
	let animationFinished = false;
	const onAnimationStop = () => (animationFinished = true);
</script>

<svelte:head>
	<title>Formate</title>
</svelte:head>

{#if $openedModal === 'create_form'}
	<CreateModal />
{/if}

{#if $deleteFormCandidate}
	<DeleteFormModal />
{/if}

<div class="welcome orange">
	<div class="content">
		<div class="hero">
			<Animation class="logo" width={512} height={512} src="./logo.riv" onStop={onAnimationStop} />

			{#if animationFinished}
				<h1 in:fly={{ y: -8, duration: 200 }}>formate</h1>
				<p in:fly={{ y: -8, duration: 200, delay: 50 }}>Build forms in a matter of minutes</p>
			{/if}
		</div>

		{#if animationFinished}
			{#if forms.length}
				<div class="list" transition:fly={{ y: -8, duration: 200, delay: 100 }}>
					{#each forms as form (form.key)}
						<div class="item" transition:slide|local={{ duration: 200 }}>
							<a class="info" href="/editor/{form.key}">
								<div class="{form.color} indicator" />
								<span class="name">{form.name}</span>
							</a>

							<button class="delete" on:click={() => setFormDeleteCandidate(form.key)}>
								<TrashBin />
							</button>
						</div>
					{/each}
				</div>
			{/if}

			<div in:fly={{ y: -8, duration: 200, delay: 150 }}>
				<Button position="centered" fullWidth on:click={openCreateFormModal}>
					Create form <Plus />
				</Button>
			</div>
		{/if}
	</div>
</div>

<style>
	button,
	a {
		all: unset;
		display: block;
	}

	h1 {
		margin: 0;
		font-size: 5rem;
		font-weight: bold;
		text-align: center;
		color: var(--text);
		opacity: 0.75;
	}

	p {
		margin: 0;
		font-size: 1.25rem;
		font-weight: lighter;
		text-align: center;
		color: var(--text);
		opacity: 0.5;
	}

	.welcome {
		display: flex;
		min-width: 100%;
		min-height: 100vh;
		align-items: flex-start;
		justify-content: center;
		background-color: var(--background);
	}

	.content {
		padding: 10vh 1rem;
		gap: 1rem;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 500px;
	}

	.hero {
		padding-bottom: 2rem;
	}

	.hero :global(.logo) {
		display: block;
		width: 12rem;
		height: 12rem;
		margin-left: auto;
		margin-right: auto;
		filter: drop-shadow(0 2px 4px #0000001a);
	}

	.list {
		display: flex;
		flex-direction: column;
		width: 100%;
		border: 2px solid;
		border-radius: 0.5rem;
		border-color: var(--border);
		background-color: white;
	}

	.list .item {
		white-space: nowrap;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 2px solid;
		border-color: var(--border);
	}

	.list .item:last-of-type {
		border-bottom: none;
	}

	.delete :global(svg) {
		display: block;
		cursor: pointer;
		opacity: 0;
		pointer-events: none;
		width: 1.25rem;
		height: 1.25rem;
		transition: 0.1s ease;
	}

	.item:hover .delete :global(svg) {
		opacity: 0.5;
		pointer-events: fill;
	}

	.item:hover .delete:hover :global(svg) {
		opacity: 1;
	}

	.item:hover .delete:hover :global(svg *) {
		stroke: var(--danger);
	}

	.delete {
		margin-right: 1rem;
	}

	.info {
		display: flex;
		align-items: center;
		padding: 1rem;
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		cursor: pointer;
	}

	.indicator {
		display: block;
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 50%;
		background-color: var(--accent);
		margin-right: 0.5rem;
	}

	.name {
		opacity: 0.5;
		transition: 0.1s ease;
	}

	.info:hover .name {
		opacity: 1;
	}
</style>

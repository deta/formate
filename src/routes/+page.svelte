<script lang="ts">
	import { version } from '$app/environment';
	import { afterNavigate } from '$app/navigation';
	import Animation from '$lib/components/Animation.svelte';
	import Button from '$lib/components/Button.svelte';
	import Plus from '$lib/components/icons/Plus.svelte';
	import List from '$lib/components/List.svelte';
	import CreateModal from '$lib/components/modals/CreateModal.svelte';
	import DeleteFormModal from '$lib/components/modals/DeleteFormModal.svelte';
	import { deleteFormCandidate, hideModals, openCreateFormModal, openedModal, setFormDeleteCandidate } from '$lib/stores/modals';
	import { format } from 'date-fns';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import type { PageData } from './$types';

	// Initial forms data
	export let data: PageData;
	$: forms = data.forms;

	// Current build version
	let buildVersion = format(new Date(Number(version)), 'HH:mm:ss dd.MM.y');

	// Reset styles to default ones
	onMount(() => {
		document.documentElement.className = '';
		hideModals();
	});

	// Skip animation if mounter from editor
	afterNavigate((navigation) => {
		if (navigation?.from?.route?.id) animationFinished = true;
	});

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
			<List bold items={forms} let:item on:delete={({ detail }) => setFormDeleteCandidate(detail.item.key)}>
				<a class="form" href="/editor/{item.key}">
					<div class="{item.color} indicator" />
					<span class="name">{item.name}</span>
				</a>
			</List>

			<div in:fly={{ y: -8, duration: 200, delay: 150 }}>
				<Button position="centered" fullWidth on:click={openCreateFormModal}>
					Create form <Plus />
				</Button>
			</div>
		{/if}
	</div>

	<div class="version">
		Build: {buildVersion}
	</div>
</div>

<style>
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

	.form {
		display: flex;
		align-items: center;
		width: 100%;
		padding: 1rem;
		margin: -1rem;
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

	.form:hover .name {
		opacity: 1;
	}

	.version {
		position: fixed;
		bottom: 1rem;
		right: 1rem;
		opacity: 0.3;
		font-size: 0.75rem;
	}
</style>

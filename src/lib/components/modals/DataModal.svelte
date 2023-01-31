<script lang="ts">
	import { form } from '$lib/stores/editor';
	import { publication } from '$lib/stores/publication';
	import { sleep } from '$lib/utils';
	import { onMount } from 'svelte';
	import Button from '../Button.svelte';
	import CopyInput from '../CopyInput.svelte';
	import Label from '../Label.svelte';
	import Modal from '../Modal.svelte';
	import Table from '../Table.svelte';

	let currentTab = 'API';
	let submissions = [];
	let loading: boolean = true;

	// Name of the table
	$: tableName = $publication?.content?.table || $form.table;

	// Initial loading
	onMount(loadData);

	/**
	 * Load data from the server
	 */
	async function loadData() {
		loading = true;

		try {
			const response = await fetch(`/api/submissions/?table=${tableName}`);
			const data = await response.json();
			submissions = data.submissions;
		} catch (error) {
			console.error(error);
		}

		await sleep(100);
		loading = false;
	}
</script>

<Modal title="Data" bind:currentTab tabs={['API', 'submissions']} wider>
	{#if currentTab === 'submissions'}
		<div>
			<Label
				title="Submissions"
				description="List of all form submissions, stored in a '{tableName}' table. For more control, you can go to the Resource tab of the installed application on the Space Canvas."
			/>

			<Table small {loading} data={submissions} />
			<Button small style="neutral" position="right" on:click={loadData}>Refresh</Button>
		</div>
	{:else if currentTab === 'API'}
		<div>
			<Label title="API" description="API URL that can be used to fetch submissions data." />
			<CopyInput value="{window.location.origin}/api/submissions?table={tableName}" />

			<div class="help">
				<div>
					To make this API route actually work, you need to generate <a href="https://deta.space/docs/en/basics/micros#api-keys">API Key</a> for your app
					instance.
				</div>

				<ol>
					<li>Generate the API Key in the configuration tab of the installed application.</li>
					<li>
						Set the <span class="code">X-Space-App-Key</span>
						HTTP header to the generated API Key.
					</li>
					<li>Send a request with the headers to the API route.</li>
				</ol>

				<p>Example: <i>(JavaScript)</i></p>
				<div class="example">
					{`// Fetch submissions
const request = await fetch('${window.location.origin}/api/submissions?table=${tableName}', { 
	headers: { 
		'X-Space-App-Key': <YOUR_API_TOKEN> 
	}
});

const data = await request.json();
console.log(data); // { submissions: [...] }`}
				</div>
			</div>
		</div>
	{/if}
</Modal>

<style>
	.help {
		margin-top: 2rem;
		padding: 2rem;
		border: 1px solid;
		font-size: 0.9rem;
		line-height: 1.5rem;
		border-radius: 0.5rem;
		border-color: var(--neutral);
		background-color: var(--background);
	}

	.example {
		overflow-x: auto;
		padding: 1rem;
		font-size: 0.75rem;
		line-height: 1rem;
		tab-size: 2rem;
		font-family: monospace;
		white-space: pre;
		background-color: white;
		color: black;
		border: 1px solid;
		border-color: var(--accent);
		border-radius: 0.5rem;
	}

	.code {
		font-family: monospace;
		color: var(--accent);
		background-color: var(--neutral);
		padding: 0.2rem 0.4rem;
		border-radius: 0.25rem;
	}
</style>

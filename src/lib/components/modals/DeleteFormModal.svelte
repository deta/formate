<script lang="ts">
	import { deleteFormCandidate, hideModals } from '$lib/stores/modals';
	import Button from '../Button.svelte';
	import Label from '../Label.svelte';
	import Modal from '../Modal.svelte';
	import { DELETE } from '$lib/http';
	import { goto, invalidateAll } from '$app/navigation';

	/**
	 * Confirm deletion
	 */
	async function confirm() {
		await DELETE(`/api/forms/${$deleteFormCandidate}`);
		$deleteFormCandidate = undefined;

		await goto('/');
		await invalidateAll();
		hideModals();
	}

	/**
	 * Cancel deletion
	 */
	function cancel() {
		hideModals();
	}
</script>

<Modal title="Delete Form">
	<Label
		title="Are you sure?"
		description="It will be impossible to undo this action. All publications of this form will also be deleted. All data submited by users will remain."
	/>

	<div class="buttons">
		<Button style="danger" on:click={confirm}>Delete</Button>
		<Button style="neutral" on:click={cancel}>Cancel</Button>
	</div>
</Modal>

<style>
	.buttons {
		gap: 1rem;
		display: flex;
		margin-left: auto;
	}
</style>

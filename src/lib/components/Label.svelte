<script lang="ts">
	// Label title
	export let title: string;

	// Additional info
	export let description: string = '';

	// Add red start to mark as required
	export let required: boolean = false;

	// Add margin to the label
	export let margin: boolean = true;
</script>

<div class="label" class:margin>
	{#if title}
		<h4>
			{title}

			{#if required}
				<span class="star">*</span>
			{/if}
		</h4>
	{/if}

	{#if description}
		<p>{description}</p>
	{/if}
</div>

<style>
	.label {
		position: relative;
		line-height: 1.5rem;
	}

	.margin {
		margin-bottom: 0.75rem;
	}

	.star {
		color: var(--danger);
	}

	h4,
	p {
		display: block;
		margin: 0;
		padding: 0;
	}

	h4 {
		position: relative;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		font-size: 1rem;
		font-weight: 700;
	}

	p {
		font-size: 0.9rem;
		opacity: 0.5;
		font-weight: 300;
	}
</style>

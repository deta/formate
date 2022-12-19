<script lang="ts">
	export let title: string;
	export let description: string = '';
	export let required: boolean = false;
</script>

<div class="label">
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
		margin-bottom: 0.75rem;
		line-height: 1.5rem;
	}

	.star {
		color: var(--danger);
		font-size: 0.75rem;
		margin-left: 0.25rem;
	}

	h4,
	p {
		margin: 0;
		padding: 0;
	}

	h4 {
		position: relative;
		display: block;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		font-size: 1rem;
		font-weight: 700;
	}

	p {
		display: block;
		font-size: 0.9rem;
		opacity: 0.5;
		font-weight: 300;
	}
</style>

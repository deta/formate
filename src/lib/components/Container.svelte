<div class="container">
	<slot />
</div>

<style>
	.container {
		display: flex;
		flex-direction: row;
		align-items: flex-end;
		width: 100%;
		gap: 1.5rem;
	}

	.container > :global(*) {
		width: 100%;
	}

	@media screen and (max-width: 800px) {
		.container {
			flex-direction: column;
		}
	}
</style>

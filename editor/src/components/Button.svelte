<script lang="ts">
	export let style: "normal" | "neutral" | "danger" = "normal";
	export let fullWidth: boolean = false;
</script>

<button on:click class:fullWidth class={style}>
	<slot />
</button>

<style>
	button {
		all: unset;
	}

	button {
		cursor: pointer;
		gap: 0.5rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		white-space: nowrap;
		color: white;
		text-align: center;
		font-weight: bold;
		font-size: 1rem;
		line-height: 1rem;
		border-radius: 8px;
		padding: 1rem 1.25rem;
		background-color: #ff9f76;
		transition: 0.1s ease;
	}

	button:hover {
		filter: brightness(1.1);
	}

	button:active {
		transform: translateY(2px);
	}

	.normal {
		color: #ffffff;
		background-color: #ff9f76;
	}

	.neutral {
		color: #787171;
		background-color: #ffead4;
	}

	.danger {
		color: white;
		background-color: #ff7979;
	}

	.fullWidth {
		width: 100%;
		padding-left: 0;
		padding-right: 0;
	}
</style>

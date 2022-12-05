<script lang="ts">
	import { onMount } from "svelte";
	import { Rive } from "@rive-app/canvas";

	export let width: number;
	export let height: number;
	export let src: string;
	export let autoplay: boolean = true;

	let canvas: HTMLCanvasElement;
	let rive: Rive;

	onMount(() => {
		rive = new Rive({ canvas, src, autoplay });
		return () => rive.cleanup();
	});
</script>

<canvas
	bind:this={canvas}
	class={$$props.class}
	style={$$props.style}
	width="{width}px"
	height="{height}px"
/>

<style>
	canvas {
		display: block;
	}
</style>

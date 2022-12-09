<script lang="ts">
    import Pencil from './icons/Pencil.svelte';
    export let value;
</script>

<div class="editable">
    <div class="input" spellcheck="false" contenteditable bind:textContent={value} />
    <div class="icon">
        <Pencil />
    </div>
</div>

<style>
    .editable {
        position: relative;
        cursor: pointer;
        display: flex;
    }

    .input {
        min-height: 1rem;
    }

    .input, .input:focus, .input:active {
        outline: none;
    }

    .icon {
        opacity: 0;
        transition: 0.1s ease;
        margin-left: 1rem;
        transform: translate(-50%, -40%);
    }

    .icon :global(svg) {
        display: block;
        width: 1.25rem;
        height: 1.25rem;
    }

    .editable:hover .icon, .editable:focus-within .icon {
        opacity: 0.3;
        transform: translate(-50%, -50%);
    }
</style>

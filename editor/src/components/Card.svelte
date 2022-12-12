<script lang="ts">
    import { slide } from 'svelte/transition';
    import { createEventDispatcher } from 'svelte';
    import TrashBin from './icons/TrashBin.svelte';

    const dispatch = createEventDispatcher();

    export let title: string;
    export let description: string = '';
    export let selected: boolean = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="card-wrapper" transition:slide|local={{ duration: 100 }}>
    <div class="card" class:selected on:click>
        <h3>{title}</h3>
        <p>{description}</p>

        <button class="delete" on:click|stopPropagation={() => dispatch('delete')}>
            <TrashBin />
        </button>
    </div>

    <div class="separator" />
</div>

<style>
    .card {
        position: relative;
        cursor: pointer;
        padding: 2rem;
        border-radius: 1rem;
        border: 2px solid;
        border-color: var(--border);
        background-color: white;
        transition: border-color 0.1s ease;
    }

    .card:hover,
    .selected {
        border-color: var(--accent);
    }

    .card h3,
    .card p {
        display: block;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 100%;
        margin: 0;
        padding: 0;
        font-size: 1rem;
    }

    .card h3 {
        margin-bottom: 0.25rem;
    }

    .card p {
        font-weight: lighter;
        opacity: 0.5;
    }

    .separator {
        width: 2px;
        min-height: 1.25rem;
        margin: 0.25rem auto;
        background-color: var(--border);
    }

    .delete {
        all: unset;
        position: absolute;
        top: 1rem;
        right: 1rem;
        opacity: 0;
        pointer-events: none;
        transition: 0.1s ease;
    }

    .delete :global(svg *) {
        stroke: var(--text);
    }

    .card:hover .delete {
        opacity: 0.3;
        pointer-events: initial;
    }

    .delete:hover {
        opacity: 1 !important;
    }

    .delete:hover :global(svg *) {
        stroke: var(--danger);
    }
</style>

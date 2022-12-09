<script lang="ts">
    import type { Field } from '../types';
    import { fly } from 'svelte/transition';
    import { deleteField, form, selectedScreenIndex } from '../stores/form';
    import TrashBin from './icons/TrashBin.svelte';
    import Input from './Input.svelte';

    import Cursor from './icons/Cursor.svelte';
    import EditableText from './EditableText.svelte';

    const icons = {
        'Short text': Cursor
    };

    export let field: Field;
    export let index: number = 0;

</script>

<div class="field" in:fly|local={{ duration: 100, x: -8, delay: 50 * index }} out:fly|local={{ duration: 200, x: 8, delay: 50 * index }}>
    <div class="heading">
        <button on:click={() => deleteField(field.key)}><TrashBin /></button>

        <div class="icon">
            <svelte:component this={icons[field.type]} />
        </div>

        <div>
            <small class="type">{field.type}</small>
            <h4 class="title">
                <EditableText bind:value={field.title} />
            </h4>
        </div>
    </div>

    <div class="content">
        <slot />
    </div>
</div>

<style>
    .field {
        gap: 1rem;
        display: flex;
        flex-direction: column;
        padding: 2rem 2.25rem;
        border-bottom: 1px solid;
        border-color: #ece6e3;
    }

    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3.5rem;
        height: 3.5rem;
        min-width: 3.5rem;
        min-height: 3.5rem;
        border-radius: 50%;
        background-color: #fff4e8;
    }

    .icon :global(svg) {
        display: block;
        width: 1.75rem;
        height: 1.75rem;
    }

    .icon :global(svg *) {
        stroke: #afaaa4;
    }

    .heading {
        position: relative;
        gap: 0.75rem;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .type,
    .title {
        all: unset;
        display: block;
    }

    .type {
        opacity: 0.5;
        font-weight: 400;
        font-size: 0.75rem;
        margin-bottom: 0.2rem;
    }

    .title {
        font-weight: 400;
        font-size: 1.25rem;
    }

    .content {
        padding-top: 1rem;
        padding-left: 4.25rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    button {
        all: unset;
        position: absolute;
        cursor: pointer;
        top: 0;
        right: 0;
        opacity: 0;
        pointer-events: none;
        transition: 0.1s ease;
    }

    .field:hover button {
        opacity: 0.5;
        pointer-events: all;
    }

    button:hover {
        opacity: 1 !important;
    }
</style>

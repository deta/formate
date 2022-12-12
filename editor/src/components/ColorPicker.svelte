<script lang="ts">
    import type { ColorScheme } from '../types';
    export let value: ColorScheme = 'orange';

    // List of all colors
    const colors: ColorScheme[] = ['red', 'orange', 'green', 'blue', 'purple'];

    // Update color scheme of the editor
    $: {
        document.documentElement.className = '';
        document.documentElement.classList.add(value);
    }

    // Create select color handler
    const selectHandler = (color: ColorScheme) => () => {
        value = color;
    };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="colors">
    {#each colors as color}
        <div class="{color} color" on:click={selectHandler(color)}>
            {value === color ? '✓' : ''}
        </div>
    {/each}
</div>

<style>
    .colors {
        gap: 12px;
        display: flex;
    }

    .color {
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1rem;
        height: 2rem;
        width: 2rem;
        border-radius: 50%;
        transition: 0.1s ease;
        background-color: var(--accent);
    }

    .color:hover {
        cursor: pointer;
        filter: brightness(1.1);
    }

    .color:active {
        transform: scale(0.8);
    }
</style>

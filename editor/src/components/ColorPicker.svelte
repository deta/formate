<script context="module" lang="ts">
    export type ColorScheme = 'red' | 'orange' | 'green' | 'blue' | 'purple';
</script>

<script lang="ts">
    export let value: ColorScheme = 'orange';

    // Create select color handler
    const selectHandler = (color: ColorScheme) => () => {
        value = color;
    };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="colors">
    <div class="color" style:background-color="#FF7676" on:click={selectHandler('red')}>
        {value === 'red' ? '✓' : ''}
    </div>

    <div class="color" style:background-color="#FF9F76" on:click={selectHandler('orange')}>
        {value === 'orange' ? '✓' : ''}
    </div>

    <div class="color" style:background-color="#9EE77C" on:click={selectHandler('green')}>
        {value === 'green' ? '✓' : ''}
    </div>

    <div class="color" style:background-color="#76BDFF" on:click={selectHandler('blue')}>
        {value === 'blue' ? '✓' : ''}
    </div>

    <div class="color" style:background-color="#AC8EFF" on:click={selectHandler('purple')}>
        {value === 'purple' ? '✓' : ''}
    </div>
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
    }

    .color:hover {
        cursor: pointer;
        filter: brightness(1.1);
    }

    .color:active {
        transform: scale(0.8);
    }
</style>

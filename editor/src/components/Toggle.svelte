<script lang="ts">
    export let active: boolean = false;
</script>

<button class:active on:click>
    <slot />
</button>

<style>
    button {
        all: unset;
    }
    
    button {
        position: relative;
        cursor: pointer;
        gap: 0.5rem;
        width: fit-content;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        user-select: none;
        white-space: nowrap;
        color: #c2b4a5;
        border: 1px solid;
        border-radius: 0.5rem;
        border-color: #c2b4a5;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        line-height: 1rem;
        padding: 1rem 1.25rem;
        background-color: white;
        transition: 0.1s ease;
    }

    button:hover {
        filter: brightness(1.05);
    }

    button:active {
        transform: translateY(2px);
    }

    button.active {
        color: #ff9f76;
        border-color: #ff9f76;
    }
</style>

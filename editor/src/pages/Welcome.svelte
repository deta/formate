<script lang="ts">
    import { fly, slide } from 'svelte/transition';
    import { onMount } from 'svelte';
    import Animation from '../components/Animation.svelte';
    import Button from '../components/Button.svelte';
    import Plus from '../components/icons/Plus.svelte';
    import TrashBin from '../components/icons/TrashBin.svelte';
    import { deleteForm, fetchForms, forms, formsLoading, selectForm } from '../stores/forms';
    import { currentPage, isCreateModalShown } from '../stores/ui';

    onMount(async () => {
        document.documentElement.className = '';
        try {
            await fetchForms();
        } catch (error) {
            console.error(error);
        }
    });

    let isVisible = false;
    const onAnimationStop = () => (isVisible = true);

    function openCreateFormModal() {
        $isCreateModalShown = true;
    }
</script>

<div class="welcome orange">
    <div class="content">
        <div class="hero">
            <Animation class="logo" width={512} height={512} src="./logo.riv" onStop={onAnimationStop} />

            {#if isVisible}
                <h1 in:fly={{ y: 8, duration: 200 }}>formate</h1>
                <p in:fly={{ y: 8, duration: 200, delay: 50 }}>Make forms in a matter of minutes</p>
            {/if}
        </div>

        {#if isVisible}
            {#if $forms && $forms.length}
                <div class="list" in:fly={{ y: 8, duration: 200, delay: 100 }}>
                    {#each $forms as form (form.key)}
                        <div class="item" transition:slide|local={{ duration: 200 }}>
                            <button class="name" on:click={() => selectForm(form.key)}>
                                <span class="{form.color} indicator">⏺</span>
                                {form.name}
                            </button>

                            <button class="delete" on:click={() => deleteForm(form.key)}>
                                <TrashBin />
                            </button>
                        </div>
                    {/each}
                </div>
            {/if}

            <div in:fly={{ y: 8, duration: 200, delay: 150 }}>
                <Button position="centered" fullWidth on:click={openCreateFormModal}>
                    Create form <Plus />
                </Button>
            </div>
        {/if}
    </div>
</div>

<style>
    button {
        all: unset;
        display: block;
    }

    h1 {
        margin: 0;
        font-size: 5rem;
        font-weight: bold;
        text-align: center;
        color: var(--text);
        opacity: 0.75;
    }

    p {
        margin: 0;
        font-size: 1.25rem;
        font-weight: lighter;
        text-align: center;
        color: var(--text);
        opacity: 0.5;
    }

    .welcome {
        display: flex;
        min-width: 100%;
        min-height: 100vh;
        align-items: flex-start;
        justify-content: center;
        background-color: var(--background);
    }

    .content {
        padding: 10vh 1rem;
        gap: 1rem;
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 500px;
    }

    .hero {
        padding-bottom: 2rem;
    }

    .hero :global(.logo) {
        display: block;
        width: 12rem;
        height: 12rem;
        margin-left: auto;
        margin-right: auto;
        filter: drop-shadow(0 2px 4px #0000001a);
    }

    .list {
        display: flex;
        flex-direction: column;
        width: 100%;
        border: 2px solid;
        border-radius: 0.5rem;
        border-color: var(--border);
        background-color: white;
    }

    .list .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 2px solid;
        border-color: var(--border);
    }

    .list .item:last-of-type {
        border-bottom: none;
    }

    .delete :global(svg) {
        display: block;
        cursor: pointer;
        opacity: 0;
        pointer-events: none;
        width: 1.25rem;
        height: 1.25rem;
        transition: 0.1s ease;
    }

    .item:hover .delete :global(svg) {
        opacity: 0.5;
        pointer-events: fill;
    }

    .item:hover .delete:hover :global(svg) {
        opacity: 1;
    }

    .item:hover .delete:hover :global(svg *) {
        stroke: var(--danger);
    }

    .delete {
        margin-right: 1rem;
    }
    
    .name {
        padding: 1rem;
        width: 100%;
        opacity: 0.5;
        cursor: pointer;
        transition: 0.1s ease;
    }

    .name:hover {
        opacity: 1;
    }

    .indicator {
        color: var(--accent);
        margin-right: 0.25rem;
    }
</style>

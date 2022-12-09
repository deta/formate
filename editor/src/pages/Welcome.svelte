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

<div class="welcome">
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
                    {#each $forms as form}
                        <div class="item" transition:slide|local={{ duration: 200 }}>
                            <div class="form-name" on:click={() => selectForm(form.key)}>{form.name}</div>

                            <button on:click={() => deleteForm(form.key)}>
                                <TrashBin size={18} />
                            </button>
                        </div>
                    {/each}
                </div>
            {/if}

            <div in:fly={{ y: 8, duration: 200, delay: 150 }}>
                <Button position="centered" fullWidth on:click={openCreateFormModal}>
                    Create form <Plus color="white" size={16} />
                </Button>
            </div>
        {/if}
    </div>
</div>

<style>
    .welcome {
        display: flex;
        min-width: 100%;
        min-height: 100vh;
        align-items: flex-start;
        justify-content: center;
        background-color: #fff9f2;
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

    .form-name {
        width: 100%;
        opacity: 0.5;
        cursor: pointer;
        margin-right: auto;
    }

    .form-name:hover {
        opacity: 1;
    }

    .list {
        display: flex;
        flex-direction: column;
        width: 100%;
        border: 2px solid;
        border-radius: 0.5rem;
        border-color: #ece6e3;
        background-color: white;
    }

    .list .item {
        display: flex;
        align-items: center;
        padding: 1rem;
        border-bottom: 2px solid;
        border-color: #ece6e3;
    }

    .list .item:last-of-type {
        border-bottom: none;
    }

    .list button {
        all: unset;
        cursor: pointer;
        opacity: 0.3;
        transition: 0.1s ease;
    }

    .list button:hover {
        opacity: 1;
    }

    .list button :global(svg) {
        display: block;
    }
    
    .list button:hover :global(svg *) {
        stroke: red;
    }

    h1 {
        margin: 0;
        font-size: 5rem;
        font-weight: bold;
        text-align: center;
        color: #787171;
    }

    p {
        margin: 0;
        font-size: 1.25rem;
        font-weight: lighter;
        text-align: center;
        color: #787171;
    }
</style>

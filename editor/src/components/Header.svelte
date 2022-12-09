<script lang="ts">
    import { fly } from 'svelte/transition';
    import Button from '../components/Button.svelte';
    import ArrowLeft from './icons/ArrowLeft.svelte';
    import { form } from '../stores/form';
    import Publication from './modals/Publication.svelte';
    import { hideAllModals, currentPage, isSettingsModalShown, isPublicationShow } from '../stores/ui';
    import { POST } from '../utils';

    function showSettingsModal() {
        hideAllModals();
        $isSettingsModalShown = true;
    }

    async function openPreview() {
        console.log($form);
        
        if (import.meta.env.DEV) {
            await POST('/api/publish', $form);
            window.open(`http://localhost:8081/f/${$form.slug}`);
        } else {
            await POST('/api/publish', $form);
            window.open(`http://localhost:8081/f/${$form.slug}`);
        }
    }

    function backToForms() {
        $currentPage = 'welcome';
    }

    function togglePublish() {
        $isPublicationShow = !$isPublicationShow;
    }
</script>

<header>
    <div class="left" in:fly={{ y: 8, duration: 200 }}>
        <button class="go-back" on:click={backToForms}>
            <ArrowLeft />
            <span>Back to forms</span>
        </button>
    </div>

    <div class="center" in:fly={{ delay: 100, y: 8, duration: 200 }}>
        <span class="form-name">{$form.name}</span>
    </div>

    <div class="right" in:fly={{ delay: 200, y: 8, duration: 200 }}>
        <Button small style="neutral" on:click={showSettingsModal}>Settings</Button>
        <Button small style="neutral" on:click={openPreview}>Preview</Button>
        <Button small on:click={togglePublish}>Publish</Button>
    </div>

    {#if $isPublicationShow}
        <Publication />
    {/if}
</header>

<style>
    header {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 4rem;
        gap: 0.75rem;
        padding: 1rem 2rem;
        border-bottom: 1px solid;
        border-color: #ece6e3;
    }

    .left {
        width: 100%;
        gap: 0.75rem;
        display: flex;
        justify-content: start;
    }

    .center {
        width: 100%;
        gap: 0.75rem;
        display: flex;
        justify-content: center;
    }

    .right {
        width: 100%;
        gap: 0.75rem;
        display: flex;
        justify-content: flex-end;
    }

    .go-back {
        all: unset;
        gap: 0.25rem;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.5;
        transition: 0.1s ease;
    }

    .go-back:hover {
        cursor: pointer;
        opacity: 1;
    }

    .go-back :global(svg *) {
        stroke: #4a4a4a;
    }

    .go-back :global(svg) {
        transition: 0.1s ease;
    }

    .go-back:hover :global(svg) {
        transform: translateX(-4px);
    }

    .form-name {
        font-weight: 500;
    }
</style>

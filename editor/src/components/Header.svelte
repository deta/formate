<script lang="ts">
    import { fly } from 'svelte/transition';
    import Button from '../components/Button.svelte';
    import ArrowLeft from './icons/ArrowLeft.svelte';
    import { form } from '../stores/form';
    import { hideAllModals, currentPage, isSettingsModalShown } from '../stores/ui';

    function showSettingsModal() {
        hideAllModals();
        $isSettingsModalShown = true;
    }

    function openPreview() {

    }

    function backToForms() {
        $currentPage = 'welcome';
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
        <Button small>Publish</Button>
    </div>
</header>

<style>
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 4rem;
        gap: 12px;
        padding: 1rem 2rem;
        border-bottom: 1px solid;
        border-color: #ece6e3;
    }

    .left {
        width: 100%;
        gap: 12px;
        display: flex;
        justify-content: start;
    }

    .center {
        width: 100%;
        gap: 12px;
        display: flex;
        justify-content: center;
    }

    .right {
        width: 100%;
        gap: 12px;
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

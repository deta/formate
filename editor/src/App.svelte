<script lang="ts">
    import Modal from './components/Modal.svelte';
    import AddFieldModal from './components/modals/AddFieldModal.svelte';
    import CreateModal from './components/modals/CreateModal.svelte';
    import CreateQuestionModal from './components/modals/CreateQuestionModal.svelte';
    import SettingsModal from './components/modals/SettingsModal.svelte';
    import Dashboard from './pages/Dashboard.svelte';
    import Welcome from './pages/Welcome.svelte';
    import { currentPage, isCreateModalShown, isSettingsModalShown, isAddFieldModalShown } from './stores/ui';
</script>

<!-- <CreateQuestionModal /> -->

{#if $isCreateModalShown}
    <CreateModal />
{/if}

{#if $isSettingsModalShown}
    <SettingsModal />
{/if}

{#if $isAddFieldModalShown}
    <AddFieldModal />
{/if}

{#if $currentPage === 'dashboard'}
    <Dashboard />
{:else}
    <Welcome />
{/if}

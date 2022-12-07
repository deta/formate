<script>
    import { currentPage, hideAllModals } from '../../stores/ui';
    import Modal from '../Modal.svelte';

    let currentTab = 'general';

    function createForm() {
        hideAllModals();
        $currentPage = 'dashboard';
    }
</script>

<Modal title="Settings" bind:currentTab tabs={['general', 'preferences']}>
    {#if currentTab === 'general'}{:else if currentTab === 'preferences'}{/if}
</Modal>

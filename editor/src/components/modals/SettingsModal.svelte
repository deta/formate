<script>
    import { currentPage, hideAllModals } from '../../stores/ui';
    import { fly } from 'svelte/transition';
    import Label from '../Label.svelte';
    import Input from '../Input.svelte';
    import ColorPicker from '../ColorPicker.svelte';
    import Modal from '../Modal.svelte';
    import { form } from '../../stores/form';
    import Button from '../Button.svelte';

    let currentTab = 'general';

    function createForm() {
        hideAllModals();
        $currentPage = 'dashboard';
    }
</script>

<Modal title="Settings" bind:currentTab tabs={['general', 'preferences']}>
    {#if currentTab === 'general'}
        <div in:fly={{ duration: 200, x: -8, delay: 0 }}>
            <Label title="Form Name" description="Name of your form, that will be displayed on the welcome page." />
            <Input bind:value={$form.name} />
        </div>

        <div in:fly={{ duration: 200, x: -8, delay: 50 }}>
            <Label title="Delete Form" description="Name of your form, that will be displayed on the welcome page." />
            <Button style="danger">Delete</Button>
        </div>

    {:else if currentTab === 'preferences'}
        <div in:fly={{ duration: 200, x: -8, delay: 0 }}>
            <Label title="Color Scheme" description="Accent color that will be used in the editor of your forms UI" />
            <ColorPicker bind:value={$form.color} />
        </div>

    {/if}
</Modal>

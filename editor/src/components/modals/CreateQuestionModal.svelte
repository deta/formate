<script lang="ts">
    import type { ColorScheme } from '../../types';
    import Button from '../Button.svelte';
    import Modal from '../Modal.svelte';
    import Input from '../Input.svelte';
    import Label from '../Label.svelte';
    import ColorPicker from '../ColorPicker.svelte';

    import { createForm } from '../../stores/forms';
    import { form, formKey } from '../../stores/form';
    import { currentPage, hideAllModals } from '../../stores/ui';

    import { HeadlessForm } from '../../utils';

    // Form structure
    interface CreateFormValues {
        question: string;
        description: string;
    }

    const { errors, hasErrors, values, validate, resetKeyError } = HeadlessForm<CreateFormValues>(
        { question: '', description: '' },
        {
            question: (value) => {
                if (value.length < 4) throw new TypeError('Name must be at least 4 characters');
            },
            description: (value) => {
                if (value && value.length < 4) throw new TypeError('Name must be at least 4 characters');
            },
        }
    );

    /**
     * Handle form submit
     */
    async function submit() {
        validate();
        if ($hasErrors) return;

        const newForm = await createForm($values);
        $form = newForm;
        $formKey = newForm.key;

        hideAllModals();
        $currentPage = 'dashboard';
    }
</script>

<Modal title="Add Screen">
    <div>
        <Label title="Question" description="Name of your form, that will be displayed on the welcome page." />
        <Input bind:value={$values.name} error={$errors.name} placeholder="What did you eat for breakfast?" on:keyup={() => resetKeyError('name')} />
    </div>

    <div>
        <Label title="Description" description="Name of your form, that will be displayed on the welcome page." />
        <Input bind:value={$values.name} error={$errors.name} on:keyup={() => resetKeyError('name')} />
    </div>

    <Button position="right" on:click={submit} disabled={$hasErrors}>Add</Button>
</Modal>

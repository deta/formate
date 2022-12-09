<script lang="ts">
    import { fly, slide } from 'svelte/transition';
    import Button from '../components/Button.svelte';
    import Card from '../components/Card.svelte';
    import EditableText from '../components/EditableText.svelte';
    import FieldEditor from '../components/FieldEditor.svelte';
    import Header from '../components/Header.svelte';
    import Plus from '../components/icons/Plus.svelte';
    import Input from '../components/Input.svelte';
    import Label from '../components/Label.svelte';
    import { form, addScreen, selectedScreen, deleteScreen, selectedScreenIndex } from '../stores/form';
    import { hideAllModals, isAddFieldModalShown, isSettingsModalShown } from '../stores/ui';

    $: screen = $form.screens[$selectedScreenIndex];

    function showAddFieldModal() {
        hideAllModals();
        $isAddFieldModalShown = true;
    }
</script>

<div class="wrapper">
    <Header />

    <main>
        <div class="sidebar" in:fly={{ delay: 300, x: -16 }}>
            {#each $form.screens as screen}
                <Card
                    title={screen.title}
                    description={screen.description}
                    selected={$selectedScreen === screen.key}
                    deletable={$form.screens.length > 1}
                    on:click={() => ($selectedScreen = screen.key)}
                    on:delete={() => deleteScreen(screen.key)}
                />
            {/each}

            <Button position="centered" on:click={addScreen}>Add Screen</Button>
        </div>

        {#if screen}
            <div class="fields" in:fly={{ delay: 400, y: 16 }}>
                <div class="field">
                    <h3>
                        <EditableText bind:value={$form.screens[$selectedScreenIndex].title} />
                    </h3>
                    <p>
                        <EditableText bind:value={$form.screens[$selectedScreenIndex].description} />
                    </p>
                </div>

                {#each screen.fields as field, index}
                    <FieldEditor {field} {index}>
                        <div class="container">
                            <div>
                                <Label title="Field key" description="Unique value, that will be used as a key for this input field" />
                                <Input bind:value={field.fieldKey} />
                            </div>
                            <div>
                                <Label title="Default Value" description="Initial value, that will be put inside the input" />
                                <Input bind:value={field.defaultValue} />
                            </div>
                            <div>
                                <Label title="Placeholder" description="Filler text that shares some characteristics of a real written text" />
                                <Input bind:value={field.placeholder} />
                            </div>
                        </div>
                    </FieldEditor>
                {/each}

                <div class="buttons">
                    <Button position="right" style="neutral" on:click={showAddFieldModal}>Add Field</Button>
                </div>
            </div>
        {/if}
    </main>
</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        height: 100vh;
    }

    main {
        height: calc(100vh - 4rem);
        display: flex;
        flex-direction: row;
    }

    .sidebar {
        display: flex;
        flex-direction: column;
        overflow-x: hidden;
        overflow-y: auto;
        height: 100%;
        width: 100%;
        max-width: 20rem;
        padding: 2rem;
        padding-bottom: 4rem;
        background-color: #fff9f2;
        border-right: 1px solid;
        border-color: #ece6e3;
    }

    .fields {
        width: 100%;
        display: flex;
        overflow-y: auto;
        overflow-x: hidden;
        flex-direction: column;
        padding-bottom: 4rem;
    }

    .field {
        padding: 2rem 2.25rem;
        border-bottom: 1px solid;
        border-color: #ece6e3;
    }

    .buttons {
        padding: 1rem 2.25rem;
    }

    h3 {
        all: unset;
        display: block;
        font-size: 1.5rem;
        font-weight: 800;
        padding-bottom: 0.25rem;
    }

    p {
        all: unset;
        display: block;
        font-size: 1.25rem;
        font-weight: 300;
    }

    .container {
        display: flex;
        width: 100%;
        gap: 1rem;
    }

    .container > * {
        width: 100%;
    }
</style>

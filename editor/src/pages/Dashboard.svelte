<script lang="ts">
    import { fly, slide } from 'svelte/transition';
    import Button from '../components/Button.svelte';
    import Card from '../components/Card.svelte';
    import Header from '../components/Header.svelte';
    import Plus from '../components/icons/Plus.svelte';
    import { form, addQuestion, selectedQuestion, deleteQuestion, selectedQuestionIndex } from '../stores/form';
    import { hideAllModals, isAddFieldModalShown, isSettingsModalShown } from '../stores/ui';

    $: question = $form.questions[$selectedQuestionIndex];

    function showAddFieldModal() {
        hideAllModals();
        $isAddFieldModalShown = true;
    }
</script>

<div class="wrapper">
    <Header />

    <main>
        <div class="sidebar" in:fly={{ delay: 300, x: -16 }}>
            {#each $form.questions as question}
                <Card
                    title={question.question}
                    description={question.description}
                    selected={$selectedQuestion === question.key}
                    deletable={$form.questions.length > 1}
                    on:click={() => ($selectedQuestion = question.key)}
                    on:delete={() => deleteQuestion(question.key)}
                />
            {/each}

            <Button position="centered" on:click={addQuestion}>Add Question</Button>
        </div>

        <div class="fields" in:fly={{ delay: 400, y: 16 }}>
            {#if question}
                <div class="field">
                    <h3>{question?.question}</h3>
                    <p>{question?.description}</p>
                </div>

                {#each question.fields as field}
                    <div class="field" transition:slide|local>
                        <p>{field.type}</p>
                    </div>
                {/each}
                
                <div class="buttons">
                    <Button position="right" style="neutral" on:click={showAddFieldModal}>Add Field</Button>
                </div>
            {/if}
        </div>
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
        width: 30%;
        min-width: 128px;
        max-width: 512px;
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
</style>

<script lang="ts">
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    import Button from './components/Button.svelte';
    import Input from './components/Input.svelte';
    import Label from './components/Label.svelte';

    let loaded = false;
    let visible = false;
    let error;

    let currentScreenIndex = 0;
    let screens = undefined;
    let finished = false;

    let inputs = {};

    $: screen = screens?.[currentScreenIndex];

    function next() {
        visible = false;

        setTimeout(async () => {
            currentScreenIndex += 1;

            if (currentScreenIndex >= screens?.length) {
                finished = true;
                await fetch('/api/submit', {
                    method: 'POST',
                    body: JSON.stringify(inputs),
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                });
            }

            visible = true;
        }, 300);
    }

    /**
     * Initialize form renderer
     */
    async function initialize() {
        try {
            const url = new URL(window.location.href);
            const slug = url.pathname
                .split('/')
                .filter((val) => val !== '')
                .pop();

            const response = await fetch(`/api/fetch?slug=${slug}`);
            const data = await response.json();
            if (!data.success) throw new Error(data?.error);

            console.log(data.form);
            screens = data.form.screens;
            document.title = data.form.name;

            setTimeout(() => {
                visible = true;
            }, 300);
        } catch (err) {
            error = err.message;
            console.error(err);
        } finally {
            loaded = true;
        }
    }

    onMount(initialize);
</script>

<div class="wrapper">
    {#if loaded}
        {#if screen && visible && !finished}
            <div class="form" transition:fly={{ duration: 200, y: 16 }}>
                <div class="heading">
                    <h2>{screen.title}</h2>
                    <p>{screen.description}</p>
                </div>

                <div class="fields">
                    {#each screen.fields as field}
                        <div>
                            <Label title={field.title} />
                            <Input placeholder={field?.placeholder} bind:value={inputs[field.fieldKey]} />
                        </div>
                    {/each}
                </div>

                <Button position="right" on:click={next}>
                    {currentScreenIndex === screens.length - 1 ? 'Submit' : 'Next Question'}
                </Button>
                {JSON.stringify(inputs)}
            </div>
        {:else if finished}
            <div class="card finished" transition:fly={{ duration: 500, y: 8 }}>
                <div class="icon">🎉</div>
                <h3>Thanks!</h3>
                <p>Your data was successfully sent! Thanks for filling in!</p>
            </div>
        {:else if error}
            <h3>{error}</h3>
        {/if}
    {/if}
</div>

<style>
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: 50vh;
        padding: 2rem;
    }

    .form {
        color: #636363;
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 3rem;
        padding: 3rem;
        padding-bottom: 4rem;
        width: 100%;
        max-width: 40rem;
        border-radius: 1rem;
        background-color: white;
    }

    .fields {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .heading {
        gap: 1rem;
        display: flex;
        flex-direction: column;
    }

    .finished {
        text-align: center;
    }

    .icon {
        font-size: 6rem;
    }

    .finished h3 {
        all: unset;
        display: block;
        font-weight: bold;
        font-size: 6rem;
    }

    .finished p {
        all: unset;
        display: block;
        font-size: 1rem;
        font-weight: 300;
    }

    .card {
        padding: 4rem;
        border-radius: 1rem;
        background-color: white;
    }

    h2,
    p {
        all: unset;
    }

    h2 {
        font-weight: 600;
        font-size: 2.5rem;
        line-height: 3rem;
    }

    p {
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 300;
    }
</style>

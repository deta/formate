<script lang="ts">
    import Animation from '../components/Animation.svelte';
    import Button from '../components/Button.svelte';
    import { isOverlayShown } from '../state/ui';
</script>

<div class="welcome">
    <div class="content">
        <div class="header">
            <Animation class="logo" width={512} height={512} src="./logo.riv" />

            <!-- <img class="logo" alt="logo" src="/logo.svg" /> -->
            <h1>formate</h1>
            <p>Make forms in a matter of minutes</p>
        </div>

        <div class="list">
            <div class="item">My Form</div>
            <div class="item">My Form</div>
        </div>

        <Button fullWidth on:click={() => ($isOverlayShown = true)}>Create form</Button>
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

    .header {
        padding-bottom: 2rem;
    }

    .header :global(.logo) {
        display: block;
        width: 12rem;
        height: 12rem;
        margin-left: auto;
        margin-right: auto;
        filter: drop-shadow(0 2px 4px #0000001a);
    }

    .list {
        display: flex;
        flex-direction: column;
        width: 100%;
        border: 2px solid;
        border-radius: 8px;
        border-color: #ece6e3;
        background-color: white;
    }

    .list .item {
        display: flex;
        padding: 1rem;
        border-bottom: 2px solid;
        border-color: #ece6e3;
    }

    .list .item:last-of-type {
        border-bottom: none;
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

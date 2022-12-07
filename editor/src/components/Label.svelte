<script lang="ts">
    export let title: string;
    export let description: string;
</script>

<div class="label">
    {#if title}
        <h4>{title}</h4>
    {/if}
    {#if description}
        <p>{description}</p>
    {/if}
</div>

<style>
    .label {
        margin-bottom: 1rem;
    }

    h4,
    p {
        margin: 0;
        padding: 0;
    }

    h4 {
        display: block;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 0.25rem;
    }

    p {
        display: block;
        font-size: 0.75rem;
        line-height: 1rem;
        opacity: 0.5;
        font-weight: 300;
    }
</style>

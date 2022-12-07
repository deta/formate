<script lang="ts">
    export let size: number = 22;
    export let color: string = 'black';
</script>

<svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="5" width="18" height="14" rx="2" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M3 7L12 13L21 7" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>

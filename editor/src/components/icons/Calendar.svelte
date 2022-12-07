<script lang="ts">
    export let size: number = 22;
    export let color: string = 'black';
</script>

<svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="5" width="16" height="16" rx="2" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M16 3V7" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M8 3V7" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M4 11H20" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M10 16H14" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>

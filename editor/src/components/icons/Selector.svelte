<script lang="ts">
    export let size: number = 22;
    export let color: string = 'black';
</script>

<svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 9L12 5L16 9" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M16 15L12 19L8 15" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>

<script lang="ts">
    export let size: number = 22;
    export let color: string = 'black';
</script>

<svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12 7V12L15 15" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>

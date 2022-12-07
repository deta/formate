<script lang="ts">
    export let size: number = 22;
    export let color: string = 'black';
</script>

<svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 12H14" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M9 4C10.6569 4 12 5.34315 12 7V17C12 18.6569 10.6569 20 9 20" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M15 4C13.3431 4 12 5.34315 12 7V17C12 18.6569 13.3431 20 15 20" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>

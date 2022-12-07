<script lang="ts">
    export let size: number = 22;
    export let color: string = 'black';
</script>

<svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 11L12 14L20 6" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M20 12V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H15" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>

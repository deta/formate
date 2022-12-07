<script lang="ts">
    export let size: number = 22;
    export let color: string = 'black';
</script>

<svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 15L7 18L10 15" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M7 6V18" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M17 3C18.1046 3 19 3.89543 19 5V8C19 9.10457 18.1046 10 17 10C15.8954 10 15 9.10457 15 8V5C15 3.89543 15.8954 3 17 3Z" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <circle cx="17" cy="16" r="2" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M19 16V19C19 20.1046 18.1046 21 17 21H15.5" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>

<script>
	import { fly,fade } from 'svelte/transition'

	export let url
</script>

{#key url}
	<div
		in:fade={{  duration: 150, delay: 300 }}
		
	>
		<slot />
	</div>
{/key}

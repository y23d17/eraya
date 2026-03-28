<script>
	import BottomBar from '@/components/shared/BottomBar.svelte';

	let { children } = $props();
</script>

{@render children()}
<BottomBar />

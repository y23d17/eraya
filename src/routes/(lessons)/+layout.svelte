<script>
	import CloseBtnFloat from '@/components/shared/CloseBtnFloat.svelte';

	let { children } = $props();
</script>

<CloseBtnFloat navigation="lessons" />
{@render children()}

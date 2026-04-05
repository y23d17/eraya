<script>
	import { page } from '$app/state';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	import '@/lib';
	import BackgroundColor from '@/components/global/BackgroundColor.svelte';
	import SystemCore from '@/components/global/SystemCore.svelte';

	let { children } = $props();
</script>

<SystemCore />
<BackgroundColor />

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}

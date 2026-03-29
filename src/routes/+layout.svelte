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

<svelte:head><link rel="icon" href={favicon} /> <title>eRaya</title></svelte:head>
{@render children()}

<div style="display:none">
	{#each locales as locale}
		<a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
	{/each}
</div>

<SystemCore />
<BackgroundColor />

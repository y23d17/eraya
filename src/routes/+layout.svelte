<script>
	import { page } from '$app/state';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import './layout.css';
	import favicon from '@/lib/assets/images/eraya-brand.png';

	import '@/lib';
	import BackgroundColor from '@/components/global/BackgroundColor.svelte';
	import SystemCore from '@/components/global/SystemCore.svelte';

	import { onMount } from 'svelte';

	onMount(() => {
		document.addEventListener(
			'deviceready',
			() => {
				console.log('Cordova is ready!');
			},
			false
		);
	});

	let { children } = $props();
</script>

<SystemCore />
<BackgroundColor />

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}

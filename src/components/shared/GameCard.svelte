<script>
	import { goto } from '$app/navigation';
	import Game from '@/lib/assets/images/games.png';

	let { title, image, imageAlt, navigation, class: className, ...props } = $props();
</script>

<article
	class="s6 m4 l3 center-align wave {className}"
	onclick={() => goto(`/${navigation}`)}
	{...props}
>
	<center><img src={image || Game} alt={imageAlt || 'Game'} width={96} /></center>
	<div>{title || 'Game Title'}</div>
</article>

<style>
	article > div {
		font-family: Quicksand Bold;
		font-size: 1.3rem;
		letter-spacing: 0;
	}
</style>

<script>
	import { goto } from '$app/navigation';

	let { image, imageAlt, title, translated, navigation, class: className, ...props } = $props();
</script>

<article class="s6 m4 center-align ripple {className}" onclick={() => goto(`/${navigation}`)}>
	<center><img src={image} alt={imageAlt} width={96} /></center>
	<h4>{title}</h4>
	<em>({translated})</em>
</article>

<style>
	h4,
	em {
		white-space: normal;
		word-wrap: break-word;
		overflow-wrap: break-word;
	}

	article > h4 {
		font-family: Fredoka Regular;
		color: #ffffff;
	}

	article > em {
		font-family: Quicksand Bold;
		letter-spacing: 0;
		color: #ffffff;
	}
</style>

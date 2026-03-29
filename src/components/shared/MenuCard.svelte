<script>
	let { image, imageAlt, title, translated, class: className, ...props } = $props();
</script>

<article class="s6 m4 center-align ripple {className}" {...props}>
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
</style>

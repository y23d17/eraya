<script>
	let { image, imageAlt, title, translated, class: className, ...props } = $props();
</script>

<article class="s12 center-align {className}" {...props}>
	<img src={image} alt={imageAlt} />
	<h5>{title}</h5>
	<em>({translated})</em>
</article>

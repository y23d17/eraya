<script>
	let { image, imageAlt, title, subtitle, class: className, ...props } = $props();
</script>

<article class={className} {...props}>
	<div>
		<img src={image} alt={imageAlt} width={96} />
	</div>
	<div class="max vertical left-align">
		<h2>{title}</h2>
		<div>{subtitle}</div>
	</div>
</article>

<style>
	div > h2 {
		color: #ffffff;
		font-family: Fredoka Regular;
	}

	div > div {
		font-family: Quicksand Bold;
		letter-spacing: 0;
	}
</style>

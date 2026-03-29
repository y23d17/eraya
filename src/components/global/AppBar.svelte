<script>
	import Brand from '@/lib/assets/images/eraya-brand.png';
	import Exit from '@/lib/assets/images/exit.png';

	let { title, subtitle } = $props();
</script>

<header class="bg-color-ice-cream">
	<nav>
		<button class="circle transparent">
			<img src={Brand} alt="brand logo" />
		</button>

		<div class="max">
			<h2>{title || 'Title?'}</h2>
		</div>

		<button class="circle transparent">
			<img src={Exit} alt="exit" />
		</button>
	</nav>

	<div class="padding">
		<h3>{subtitle || 'Subtitle?'}</h3>
	</div>
</header>

<style>
	header {
		position: sticky;
		top: 0;
		bottom: 1;
		left: 0;
		right: 0;
		z-index: 99;
		border-bottom-left-radius: 1.2rem;
		border-bottom-right-radius: 1.2rem;
	}
</style>

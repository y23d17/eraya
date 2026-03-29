<script>
	import Start from '@/lib/assets/images/start.png';

	let { title, subtitle, icon, class: className, ...props } = $props();
</script>

<article class="s12 middle-align wave grid {className}" {...props}>
	<div class="s2">
		<img src={icon} alt="greeting" width={64} />
	</div>

	<div class="s8 vertical">
		<h4>{title}</h4>
		<div>{subtitle}</div>
	</div>

	<div class="s2">
		<center>
			<img src={Start} alt="start" width={64} />
		</center>
	</div>
</article>

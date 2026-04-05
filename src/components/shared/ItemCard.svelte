<script>
	import { goto } from '$app/navigation';
	import Start from '@/lib/assets/images/start.png';

	let { title, subtitle, icon, navigation, class: className, ...props } = $props();
</script>

<article
	class="s12 m6 l4 middle-align wave grid {className}"
	onclick={() => goto(`/${navigation}`)}
	{...props}
>
	<div class="s2 er-image-container">
		<center><img src={icon} alt="greeting" width={64} /></center>
	</div>

	<div class="s8 vertical">
		<h4>{title}</h4>
		<div>{subtitle}</div>
	</div>

	<div class="s2 er-play-container">
		<center>
			<img src={Start} alt="start" width={64} />
		</center>
	</div>
</article>

<style>
	article > div > h4 {
		font-family: Fredoka Regular;
		color: #ffffff;
		text-shadow: rgba(0, 0, 0, 0.5) 3px 3px;
	}

	article > div > div {
		font-family: Quicksand Bold;
		letter-spacing: 0;
		color: #ffffff;
		text-shadow: rgba(0, 0, 0, 0.5) 3px 3px;
	}

	.er-image-container {
		background-color: rgba(255, 255, 255, 0.4);
		box-shadow: rgba(0, 0, 0, 0.6) 2px 2px 0;
		width: 75px;
		height: 75px;
		display: grid;
		align-items: center;
		border-radius: 8px;
		backdrop-filter: blur(5px);
	}
</style>

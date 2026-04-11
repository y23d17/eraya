<script>
	import AppBar from '@/components/global/AppBar.svelte';
	import Banner from '@/components/shared/Banner.svelte';
	import GameCard from '@/components/shared/GameCard.svelte';
	import Games from '@/lib/assets/images/games.png';
</script>

<AppBar title="eRaya" subtitle="Games" />

<main class="responsive no-padding page top active">
	<div class="medium-space"></div>

	<div class="padding vertical scroll">
		<section class="grid">
			<Banner
				image={Games}
				imageAlt="games"
				title="Have Fun!"
				subtitle="Play and Learn fun and interactive games."
				class="s12 horizontal bg-color-sunny"
			/>
		</section>

		<div class="medium-space"></div>

		<section class="grid">
			<div class="s12 horizontal">
				<button class="circle transparent">
					<img src={Games} alt="bulb" />
				</button>

				<h3>Play together!</h3>
			</div>
		</section>

		<section class="grid">
			<GameCard title="Color Fusion" navigation="games/color-fusion" />
		</section>
	</div>
</main>

<style>
	section > div > h3 {
		font-family: Fredoka Regular;
	}
</style>

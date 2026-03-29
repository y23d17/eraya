<script>
	import MenuCard from '@/components/shared/MenuCard.svelte';
	import Compass from '@/lib/assets/images/compass.png';

	import LessonsIcom from '@/lib/assets/images/lesson.png';
	import GamesIcom from '@/lib/assets/images/games.png';
	import BooksIcon from '@/lib/assets/images/books.png';
	import AppBar from '@/components/global/AppBar.svelte';
</script>

<AppBar title="eRaya" subtitle="Welcome Home!" />

<main class="responsive no-padding">
	<div class="medium-space"></div>

	<div class="padding vertical scroll">
		<section class="grid">
			<div class="s12 horizontal">
				<button class="circle transparent">
					<img src={Compass} alt="compass" />
				</button>
				<h3>Explore</h3>
			</div>
			<MenuCard
				image={LessonsIcom}
				class="bg-color-sky"
				imageAlt="lesson icon"
				title="Turun an"
				translated="Lessons"
			/>

			<MenuCard
				image={GamesIcom}
				class="bg-color-sunny"
				imageAlt="games icon"
				title="Sipal"
				translated="Games"
			/>

			<MenuCard
				image={BooksIcon}
				class="bg-color-lavender"
				imageAlt="books "
				title="Barasahan"
				translated="Library"
			/>
		</section>
	</div>
</main>

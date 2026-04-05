<script>
	import AppBar from '@/components/global/AppBar.svelte';
	import Banner from '@/components/shared/Banner.svelte';
	import MenuCard from '@/components/shared/MenuCard.svelte';

	import Book from '@/lib/assets/images/books.png';
</script>

<AppBar title="eRaya" subtitle="Library" />

<main class="responsive no-padding page top active">
	<div class="padding vertical-scrol">
		<section class="grid">
			<Banner
				image={Book}
				imageAlt="book"
				title="Read more!"
				subtitle="Expand your knowledge and learn more resources available."
				class="s12 horizontal bg-color-taffy"
			/>
		</section>

		<div class="medium-space"></div>

		<section class="grid">
			<MenuCard
				image={Book}
				title="Trivia"
				translated="Knowing about Kinaray-a language!"
				class="bg-color-indigo-night"
				navigation="library/trivia"
			/>
		</section>
	</div>
</main>

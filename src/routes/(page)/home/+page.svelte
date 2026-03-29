<script>
	import MenuCard from '@/components/shared/MenuCard.svelte';
	import Brand from '@/lib/assets/images/eraya-brand.png';
	import Exit from '@/lib/assets/images/exit.png';
	import Compass from '@/lib/assets/images/compass.png';
	import Star from '@/lib/assets/images/star.png';
	import Question from '@/lib/assets/images/question.svg';
	import LessonsIcom from '@/lib/assets/images/lesson.png';
	import GamesIcom from '@/lib/assets/images/games.png';
	import BooksIcon from '@/lib/assets/images/books.png';
</script>

<main class="responsive no-padding">
	<header id="er-appbar" class="bg-color-ice-cream">
		<nav>
			<button class="circle transparent">
				<img src={Brand} alt="brand logo" />
			</button>

			<div class="max">
				<h3>eRaya</h3>
			</div>

			<button class="circle transparent">
				<img src={Exit} alt="exit" />
			</button>
		</nav>

		<div class="padding">
			<h3>Welcome home!</h3>
		</div>
	</header>

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

		<div class="medium-space"></div>

		<section class="grid">
			<div class="s12 horizontal">
				<button class="circle transparent">
					<img src={Star} alt="star" />
				</button>
				<h3>Quiz Time!</h3>
			</div>

			<article id="er-quiz" class="s12 center-align">
				<center><img src={Question} alt="question" width={96} /></center>
				<h5>Test Your Knowledge!</h5>
				<em>Answer 10 fun questions.</em>
				<div class="large-space"></div>
				<div>
					<button class="no-round large"> Start Quiz </button>
				</div>
			</article>
		</section>
	</div>
</main>

<style>
	#er-appbar {
		position: sticky;
		top: 0;
		bottom: 1;
		left: 0;
		right: 0;
		z-index: 99;
		border-bottom-left-radius: 1.2rem;
		border-bottom-right-radius: 1.2rem;
	}

	#er-quiz {
		border: 5px solid transparent;
		border-radius: 1rem;
		background:
			linear-gradient(#dcc9e7) padding-box,
			linear-gradient(90deg, #ff3e3e, #ff8a00, #ffe600, #4cd964, #32a7ff, #9b59ff, #ff3e9e)
				border-box;
		background-size: 400% 400%;
		animation: rainbowShift 12s ease infinite;
	}

	@keyframes rainbowShift {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>

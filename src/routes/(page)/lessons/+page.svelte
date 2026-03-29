<script>
	import AppBar from '@/components/global/AppBar.svelte';
	import Learn from '@/lib/assets/images/learn.png';
	import Bulb from '@/lib/assets/images/bulb.png';
	import Greeting from '@/lib/assets/images/greeting.png';
	import ItemCard from '@/components/shared/ItemCard.svelte';
	import Number from '@/lib/assets/images/number.png';
	import Shape from '@/lib/assets/images/shape.svg';
	import Star from '@/lib/assets/images/star.png';
	import Question from '@/lib/assets/images/question.svg';
</script>

<AppBar title="eRaya" subtitle="Lessons" />

<main class="responsive no-padding">
	<div class="medium-space"></div>

	<div class="padding vertical scroll">
		<section class="grid">
			<article class="s12 horizontal bg-color-electric-blue">
				<div>
					<img src={Learn} alt="learn" width={96} />
				</div>
				<div class="max vertical left-align">
					<h1>Have fun!</h1>
					<div>Explore, discover and learn fun lessons in Kinaray-a.</div>
				</div>
			</article>
		</section>

		<div class="medium-space"></div>

		<section class="grid">
			<div class="s12 horizontal">
				<button class="circle transparent">
					<img src={Bulb} alt="bulb" />
				</button>

				<h3>Learn together!</h3>
			</div>
		</section>

		<section class="grid">
			<ItemCard
				icon={Greeting}
				title="Greeting"
				subtitle="Learn how to greet people"
				class="bg-color-deep-plum"
			/>

			<ItemCard
				icon={Number}
				title="Number"
				subtitle="Learn how to count numbers"
				class="bg-color-watermelon"
			/>

			<ItemCard
				icon={Shape}
				title="Shapes"
				subtitle="Shapes are important"
				class="bg-color-honey"
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

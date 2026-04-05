<script>
	import AppBar from '@/components/global/AppBar.svelte';
	import Learn from '@/lib/assets/images/learn.png';
	import Bulb from '@/lib/assets/images/bulb.png';
	import Greeting from '@/lib/assets/images/greeting.png';
	import ItemCard from '@/components/shared/ItemCard.svelte';
	import Number from '@/lib/assets/images/number.png';
	import Shape from '@/lib/assets/images/shape.svg';
	import Palette from '@/lib/assets/images/palette.png';
	import Family from '@/lib/assets/images/family.png';
	import Food from '@/lib/assets/images/food.png';
	import Sharing from '@/lib/assets/images/gift.png';
	import GoodManner from '@/lib/assets/images/double-check.png';
	import Feeling from '@/lib/assets/images/heart.png';
	import ListenUp from '@/lib/assets/images/ear.png';
	import Star from '@/lib/assets/images/star.png';
	import Question from '@/lib/assets/images/question.svg';
	import { goto } from '$app/navigation';
	import Banner from '@/components/shared/Banner.svelte';
</script>

<AppBar title="eRaya" subtitle="Lessons" />

<main class="responsive no-padding page top active">
	<div class="medium-space"></div>

	<div class="padding vertical scroll">
		<section class="grid">
			<Banner
				image={Learn}
				imageAlt="learn"
				title="Let's Learn!"
				subtitle="Explore, discover and learn fun lessons in Kinaray-a language."
				class="s12 horizontal bg-color-electric-blue"
			/>
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
			<div class="s12">
				<h4>Everyday Stuff</h4>
			</div>
			<ItemCard
				icon={Greeting}
				title="Greetings"
				subtitle="Learn how to say hello and good morning!"
				class="bg-color-deep-plum"
				navigation="lessons/greetings-1/good-morning"
			/>

			<ItemCard
				icon={Number}
				title="Numbers"
				subtitle="Count and learn numbers!"
				class="bg-color-honey"
				navigation="lessons/numbers-1"
			/>

			<ItemCard
				icon={Shape}
				title="Shapes"
				subtitle="Discover shapes around you!"
				class="bg-color-forest-mist"
				navigation="lessons/shapes-1"
			/>
			<div class="small-space"></div>
		</section>

		<section class="grid">
			<div class="s12">
				<h4>Common Skills</h4>
			</div>
			<ItemCard
				icon={Greeting}
				title="Greetings"
				subtitle="Practice saying hello like a pro!"
				class="bg-color-hot-punch"
				navigation="lessons/greetings-2"
			/>

			<ItemCard
				icon={Number}
				title="Numbers"
				subtitle="Learn to count and do simple math!"
				class="bg-color-tiger-lily"
				navigation="lessons/numbers-2"
			/>

			<ItemCard
				icon={Shape}
				title="Shapes"
				subtitle="Identify shapes in everyday things!"
				class="bg-color-electric-blue"
				navigation="lessons/shapes-2"
			/>

			<ItemCard
				icon={Palette}
				title="Colors"
				subtitle="Explore and name different colors!"
				class="bg-color-rainbow"
				navigation="lessons/colors"
			/>

			<ItemCard
				icon={Family}
				title="Family"
				subtitle="Meet your family members!"
				class="bg-color-emerald-glow"
				navigation="lessons/family"
			/>

			<ItemCard
				icon={Food}
				title="Foods"
				subtitle="Learn about yummy food and drinks!"
				class="bg-color-creamsicle"
				navigation="lessons/foods"
			/>
			<div class="small-space"></div>
		</section>

		<section class="grid">
			<div class="s12">
				<h4>Useful Skills</h4>
			</div>
			<ItemCard
				icon={Sharing}
				title="Sharing"
				subtitle="Learn to share and take turns with friends!"
				class="bg-color-amethyst"
				navigation="lessons/sharing"
			/>

			<ItemCard
				icon={GoodManner}
				title="Good manners"
				subtitle="Be kind with magic words!"
				class="bg-color-mint-leaf"
				navigation="lessons/good-manners"
			/>

			<ItemCard
				icon={Feeling}
				title="Feelings"
				subtitle="Understand and express your emotions!"
				class="bg-color-cosmic-night"
				navigation="lessons/feelings"
			/>

			<ItemCard
				icon={ListenUp}
				title="Listen Up!"
				subtitle="Practice listening and following directions!"
				class="bg-color-indigo-night"
				navigation="lessons/listen-up"
			/>

			<div class="medium-space"></div>
		</section>

		<section class="grid">
			<div class="s12 horizontal">
				<button class="circle transparent">
					<img src={Star} alt="star" />
				</button>
				<h3>Quiz Time!</h3>
			</div>

			<article id="er-quiz" class="s12 center-align grid">
				<div class="s12">
					<center><img src={Question} alt="question" width={96} /></center>
					<h5 id="er-quiz-title">Test Your Knowledge!</h5>
					<div id="er-quiz-description">Answer 10 fun questions.</div>
					<div class="large-space"></div>
				</div>
				<button id="er-quiz-btn" class="no-round large s12" onclick={() => goto('/lessons/quiz')}>
					Start Quiz
				</button>
			</article>
		</section>
	</div>
</main>

<style>
	section > div > h3 {
		font-family: Fredoka Regular;
	}

	article > div > div,
	article > div,
	section > div > h4 {
		font-family: Quicksand Bold;
		letter-spacing: 0;
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

	#er-quiz-title,
	#er-quiz-description {
		color: rgb(70, 12, 165);
	}

	#er-quiz-title {
		font-family: Fredoka Regular;
	}

	#er-quiz-btn {
		background-color: #1fd83e;
		border-bottom: solid #08961f 5px;
		color: #ffffff;
		font-family: Fredoka Regular;
		font-size: 1.2rem;
	}

	#er-quiz-btn:active {
		background-color: #1fd83e;
		border: solid #08961f 5px;
		border-bottom: none;
		color: #ffffff;
		font-family: Fredoka Regular;
		font-size: 1.2rem;
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

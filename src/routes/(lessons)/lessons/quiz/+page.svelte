<script>
	import { fly, fade, scale } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';

	let currentIndex = $state(0);
	let score = $state(0);
	let selectedAnswer = $state(null);
	let isSubmitted = $state(false);

	const questions = [
		{
			question: 'What is the shape of Coin"?',
			options: ['Bilog', 'Triyangulo', 'Kwadrado', 'Dayamond'],
			answer: 'Bilog',
			bg: '#42a5f5'
		},
		{
			question: 'How do you greet people after lunch"?',
			options: ['Mayad nga aga', 'Mayad nga gabi-i', 'Mayad nga hapon', 'Ako ang mayad'],
			answer: 'Mayad nga hapon',
			bg: '#66bb6a'
		},
		{
			question: 'What number is more than 5?',
			options: ['Lima', 'Isara', 'Anum', 'Darwa'],
			answer: 'Anum',
			bg: '#ffa726'
		}
	];

	let current = $derived(questions[currentIndex]);

	const handleAnswer = (answer) => {
		selectedAnswer = answer;
	};

	const submitAnswer = () => {
		if (selectedAnswer === current.answer) {
			score++;
		}
		isSubmitted = true;
	};

	const nextQuestion = () => {
		if (currentIndex < questions.length - 1) {
			currentIndex++;
			selectedAnswer = null;
			isSubmitted = false;
		}
	};

	const finishQuiz = () => {
		alert(`Quiz finished! Your score is ${score} out of ${questions.length}`);
	};
</script>

{#snippet QuestionCard(item)}
	<div class="hero-visual">
		<div class="message-icon" in:scale={{ duration: 800, easing: elasticOut }}>🤔</div>
	</div>
	<div class="pill-bubble">
		<h1 class="title">{item.question}</h1>
		{#each item.options as option}
			<div
				class="option"
				class:selected={selectedAnswer === option}
				on:click={() => handleAnswer(option)}
			>
				{option}
			</div>
		{/each}
	</div>
	{#if isSubmitted}
		<div class="result">
			{#if selectedAnswer === item.answer}
				<p>Correct!</p>
			{:else}
				<p>Incorrect. The correct answer is {item.answer}.</p>
			{/if}
		</div>
	{/if}
{/snippet}

<main class="viewport" style="background-color: {current.bg}">
	{#key currentIndex}
		<div class="slide-wrapper" in:fly={{ x: 200, duration: 500 }} out:fade>
			{@render QuestionCard(current)}
		</div>
	{/key}
	<footer class="ui-layer">
		{#if !isSubmitted}
			<button class="nav-btn" on:click={submitAnswer}>Submit</button>
		{:else if currentIndex < questions.length - 1}
			<button class="nav-btn" on:click={nextQuestion}>Next</button>
		{:else}
			<button class="nav-btn" on:click={finishQuiz}>Finish</button>
		{/if}
	</footer>
</main>

<style>
	.viewport {
		height: 100vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		transition: background-color 00.8s ease;
		font-family: 'Quicksand', sans-serif;
		overflow: hidden;
		position: relative;
	}

	.slide-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		width: 90%;
	}

	.hero-visual {
		margin-bottom: 25px;
	}

	.message-icon {
		font-size: 10rem;
		filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.15));
		animation: wobble 4s infinite ease-in-out;
	}

	.pill-bubble {
		background: white;
		padding: 1.5rem 4rem;
		border-radius: 60px;
		box-shadow: 0 10px 0px rgba(0, 0, 0, 0.1);
		border: 8px solid #fce4ec;
		z-index: 10;
	}

	.title {
		font-size: 2.4rem;
		margin: 0;
		color: #333;
		line-height: 1.1;
		font-family: Fredoka Regular;
		letter-spacing: 0;
	}

	.option {
		margin: 10px 0;
		padding: 10px;
		border-bottom: solid #08961f 5px;
		border-radius: 10px;
		cursor: pointer;
		background-color: #1fd83e;
		font-family: Quicksand Bold;
		color: #ffffff;
		font-size: 1.8rem;
	}

	.option.selected {
		background-color: #1fd83e;
		border: solid #08961f 5px;
		border-bottom: none;
	}

	.result {
		margin-top: 20px;
		font-size: 2rem;
		font-family: Quicksand Bold;
	}

	.ui-layer {
		position: absolute;
		bottom: 8%;
		width: 90%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.nav-btn {
		background: white;
		border: none;
		padding: 1.1rem 2rem;
		border-radius: 25px;
		font-weight: bold;
		color: #ad1457;
		box-shadow: 0 6px 0 #f8bbd0;
		cursor: pointer;
	}

	@keyframes wobble {
		0%,
		100% {
			transform: rotate(-5deg);
		}
		50% {
			transform: rotate(5deg);
		}
	}
</style>

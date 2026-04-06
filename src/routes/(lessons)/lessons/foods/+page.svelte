<script>
	import { fly, fade, scale } from 'svelte/transition';
	import { backOut } from 'svelte/easing';

	// 1. State for Carousel
	let currentIndex = $state(0);

	// 2. Foods Data - Styled for Common Skills
	const foods = [
		{
			name: 'Kan-on',
			english: 'Rice',
			icon: '🍚',
			example: 'Mainit nga kan-on.',
			bg: '#81c784' // Fresh Green
		},
		{
			name: 'Dapli',
			english: 'Viand / Dish',
			icon: '🍗',
			example: 'Manamit nga dapli.',
			bg: '#ffb74d' // Warm Orange
		},
		{
			name: 'Sabaw',
			english: 'Soup',
			icon: '🥣',
			example: 'Mainit nga sabaw.',
			bg: '#4fc3f7' // Soft Blue
		},
		{
			name: 'Prutas',
			english: 'Fruit',
			icon: '🍌',
			example: 'Hamis nga prutas.',
			bg: '#f06292' // Signature Pink
		}
	];

	let current = $derived(foods[currentIndex]);

	const next = () => {
		if (currentIndex < foods.length - 1) currentIndex++;
	};
	const prev = () => {
		if (currentIndex > 0) currentIndex--;
	};
</script>

{#snippet FoodCard(item)}
	<div class="hero-visual">
		<div class="food-icon" in:scale={{ duration: 800, easing: backOut }}>
			{item.icon}
		</div>
	</div>

	<div class="word-bubble">
		<h1 class="native-text">{item.name}</h1>
		<p class="english-sub">{item.english}</p>
	</div>

	<div class="example-box">
		<p><em>"{item.example}"</em></p>
	</div>
{/snippet}

<main class="viewport" style="background-color: {current.bg}">
	{#key currentIndex}
		<section class="slide-content" in:fly={{ x: 200, duration: 500 }} out:fade>
			{@render FoodCard(current)}
		</section>
	{/key}

	<footer class="controls">
		<button onclick={prev} disabled={currentIndex === 0} class="nav-btn">Back</button>

		<div class="dots">
			{#each foods as _, i}
				<div class="dot" class:active={i === currentIndex}></div>
			{/each}
		</div>

		<button onclick={next} disabled={currentIndex === foods.length - 1} class="nav-btn next"
			>Next</button
		>
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
		transition: background-color 0.8s ease;
		font-family: 'Quicksand', sans-serif;
		overflow: hidden;
		position: relative;
	}

	.slide-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		width: 90%;
	}

	.hero-visual {
		margin-bottom: 2rem;
	}

	.food-icon {
		font-size: 10rem;
		filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.15));
		/* Make the food "wiggle" slightly to look yummy */
		animation: wiggle 3s infinite ease-in-out;
	}

	/* Signature Common Skills Bubble */
	.word-bubble {
		background: white;
		padding: 1.5rem 3.5rem;
		border-radius: 60px;
		box-shadow: 0 10px 0px rgba(0, 0, 0, 0.1);
		border: 8px solid #fce4ec; /* Signature Pink Border */
		min-width: 280px;
	}

	.native-text {
		font-size: 3.5rem;
		margin: 0;
		color: #333;
		line-height: 1;
		font-family: Fredoka Regular;
	}

	.english-sub {
		margin: 5px 0 0;
		color: #f06292;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 2px;
		font-size: 0.9rem;
		font-family: Quicksand Bold;
	}

	.example-box {
		margin-top: 2.5rem;
		background: rgba(255, 255, 255, 0.25);
		padding: 12px 28px;
		border-radius: 25px;
		color: white;
		font-size: 1.3rem;
		backdrop-filter: blur(8px);
		border: 2px solid rgba(255, 255, 255, 0.3);
		font-family: Quicksand Bold;
	}

	/* Nav Controls */
	.controls {
		position: absolute;
		bottom: 8%;
		width: 90%;
		display: flex;
		justify-content: space-between;
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

	.nav-btn:active:not(:disabled) {
		transform: translateY(4px);
		box-shadow: 0 2px 0 #f8bbd0;
	}

	.nav-btn:disabled {
		opacity: 0.5;
	}

	.dots {
		display: flex;
		gap: 12px;
	}

	.dot {
		width: 10px;
		height: 10px;
		background: rgba(255, 255, 255, 0.4);
		border-radius: 50%;
		transition: 0.3s;
	}

	.dot.active {
		background: white;
		transform: scale(1.5);
	}

	@keyframes wiggle {
		0%,
		100% {
			transform: rotate(-3deg) scale(1);
		}
		50% {
			transform: rotate(3deg) scale(1.05);
		}
	}
</style>

<script>
	import { fly, fade } from 'svelte/transition';

	// 1. Data State (Using Runes)
	let currentIndex = $state(0);

	const numberData = [
		{ digit: '1', native: 'Isara', objects: 1, item: '🍎' },
		{ digit: '2', native: 'Darwa', objects: 2, item: '🐥' },
		{ digit: '3', native: 'Tatlo', objects: 3, item: '⭐' },
		{ digit: '4', native: 'Apat', objects: 4, item: '🚗' },
		{ digit: '5', native: 'Lima', objects: 5, item: '🎈' },
		{ digit: '6', native: 'Anum', objects: 6, item: ' 🥚' },
		{ digit: '7', native: 'Pito', objects: 7, item: '🚩' },
		{ digit: '8', native: 'Walo', objects: 8, item: '🎱' }
	];

	// 2. Derived Logic
	let current = $derived(numberData[currentIndex]);

	function next() {
		if (currentIndex < numberData.length - 1) currentIndex++;
	}

	function prev() {
		if (currentIndex > 0) currentIndex--;
	}
</script>

<main class="slideshow-container">
	{#key currentIndex}
		<section class="slide" in:fly={{ x: 300, duration: 600 }} out:fly={{ x: -300, duration: 600 }}>
			<div class="top-info center-align">
				<span class="big-digit">{current.digit}</span>
				<div class="medium-space"></div>
				<div class="native-label">
					<h2>{current.native}</h2>
				</div>
			</div>

			<div class="visual-area">
				{#each Array(current.objects) as _}
					<span class="emoji-item" in:fade={{ delay: 200 }}>{current.item}</span>
				{/each}
			</div>
		</section>
	{/key}

	<div class="nav-controls">
		<button onclick={prev} disabled={currentIndex === 0} class="btn-round">⬅️</button>
		<button onclick={next} disabled={currentIndex === numberData.length - 1} class="btn-round"
			>➡️</button
		>
	</div>
</main>

<style>
	.slideshow-container {
		--bg-yellow: #fcd34d;
		--dark-yellow: #f59e0b;

		height: 100vh;
		width: 100%;
		background: linear-gradient(to bottom, var(--bg-yellow), var(--dark-yellow));
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		font-family: 'Quicksand', sans-serif;
	}

	.slide {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}

	.big-digit {
		font-size: 10rem;
		font-weight: 900;
		color: white;
		line-height: 1;
		/* 3D shadow effect */
		text-shadow:
			0 10px 0 #d97706,
			0 20px 30px rgba(0, 0, 0, 0.2);
		font-family: Fredoka Regular;
	}

	.native-label {
		background: white;
		padding: 0.5rem 3rem;
		border-radius: 999px;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
		transform: translateY(-20px);
		font-family: Quicksand Bold;
	}

	.native-label h2 {
		margin: 0;
		font-size: 2.5rem;
		color: #1a1a1a;
	}

	.visual-area {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		justify-content: center;
		max-width: 80%;
	}

	.emoji-item {
		font-size: 5rem;
		filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.1));
		animation: bounce 2s infinite ease-in-out;
	}

	.nav-controls {
		position: absolute;
		bottom: 10%;
		display: flex;
		gap: 4rem;
	}

	.btn-round {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		border: none;
		background: white;
		font-size: 2rem;
		cursor: pointer;
		box-shadow: 0 6px 0 #ddd;
		transition: all 0.1s;
	}

	.btn-round:active:not(:disabled) {
		transform: translateY(4px);
		box-shadow: 0 2px 0 #ddd;
	}

	.btn-round:disabled {
		opacity: 0.3;
		cursor: not-allowed;
	}

	@keyframes bounce {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-15px);
		}
	}
</style>

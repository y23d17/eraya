<script>
	import { fly, fade, scale } from 'svelte/transition';

	// 1. App State using Svelte 5 Runes
	let currentIndex = $state(0);

	// 2. Data Array for Common Skills: Numbers
	const numberSkills = [
		{
			digit: '1',
			native: 'Isara',
			english: 'One',
			theme: '#f06292', // Primary Common Skills Pink
			icon: '🍎',
			phrase: 'Isara ka bilog nga saging'
		},
		{
			digit: '2',
			native: 'Darwa',
			english: 'Two',
			theme: '#ba68c8', // Purple variation
			icon: '🐥',
			phrase: 'Darwa ka pispis'
		},
		{
			digit: '3',
			native: 'Tatlo',
			english: 'Three',
			theme: '#4db6ac', // Teal variation
			icon: '⭐',
			phrase: 'Tatlo ka bituon'
		}
	];

	// 3. Derived current object for reactivity
	let current = $derived(numberSkills[currentIndex]);

	// Navigation Logic
	const next = () => {
		if (currentIndex < numberSkills.length - 1) currentIndex++;
	};
	const prev = () => {
		if (currentIndex > 0) currentIndex--;
	};
</script>

{#snippet NumberCard(item)}
	<div class="hero-box">
		<span class="giant-number" in:scale={{ delay: 200, duration: 600 }}>{item.digit}</span>
		<div class="floating-emoji">{item.icon}</div>
	</div>

	<div class="pill-bubble">
		<h1 class="native-title">{item.native}</h1>
		<p class="english-sub">{item.english}</p>
	</div>

	<div class="usage-context">
		<p>"{item.phrase}"</p>
	</div>
{/snippet}

<main class="viewport" style="background-color: {current.theme}">
	{#key currentIndex}
		<div class="slide-wrapper" in:fly={{ x: 200, duration: 500 }} out:fade>
			{@render NumberCard(current)}
		</div>
	{/key}

	<footer class="ui-layer">
		<button onclick={prev} disabled={currentIndex === 0} class="nav-btn"> Back </button>

		<div class="page-count">
			{currentIndex + 1} / {numberSkills.length}
		</div>

		<button onclick={next} disabled={currentIndex === numberSkills.length - 1} class="nav-btn next">
			Next
		</button>
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

	.slide-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		width: 90%;
	}

	.hero-box {
		position: relative;
		margin-bottom: 20px;
	}

	.giant-number {
		font-size: 14rem;
		font-weight: 900;
		color: rgba(255, 255, 255, 0.8);
		line-height: 1;
		text-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
	}

	.floating-emoji {
		font-size: 4.5rem;
		position: absolute;
		bottom: 10px;
		right: -10px;
		animation: bounce 2.5s infinite ease-in-out;
	}

	/* The Signature Common Skills Word Bubble */
	.pill-bubble {
		background: white;
		padding: 1.5rem 4rem;
		border-radius: 60px;
		box-shadow: 0 10px 0px rgba(0, 0, 0, 0.1);
		border: 8px solid #fce4ec; /* Signature Pink Border */
		z-index: 10;
	}

	.native-title {
		font-size: 3.5rem;
		margin: 0;
		color: #333;
		letter-spacing: -2px;
	}

	.english-sub {
		margin: 0;
		color: #f06292; /* Deep Pink */
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 2px;
		font-size: 1rem;
	}

	.usage-context {
		margin-top: 2rem;
		background: rgba(0, 0, 0, 0.15);
		padding: 10px 25px;
		border-radius: 20px;
		color: white;
		font-size: 1.2rem;
		font-style: italic;
	}

	/* Navigation Footer */
	.ui-layer {
		position: absolute;
		bottom: 6%;
		width: 90%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.nav-btn {
		background: white;
		border: none;
		padding: 1.2rem 2.2rem;
		border-radius: 25px;
		font-weight: bold;
		color: #ad1457;
		box-shadow: 0 6px 0 #f8bbd0;
		cursor: pointer;
		transition: transform 0.1s;
	}

	.nav-btn:active:not(:disabled) {
		transform: translateY(4px);
		box-shadow: 0 2px 0 #f8bbd0;
	}

	.nav-btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.page-count {
		color: white;
		font-weight: bold;
		letter-spacing: 1px;
		background: rgba(255, 255, 255, 0.2);
		padding: 6px 15px;
		border-radius: 15px;
	}

	@keyframes bounce {
		0%,
		100% {
			transform: translateY(0) rotate(0deg);
		}
		50% {
			transform: translateY(-25px) rotate(10deg);
		}
	}
</style>

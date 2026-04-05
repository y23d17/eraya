<script>
	import { fly, fade } from 'svelte/transition';

	// 1. State for the current slide
	let currentIndex = $state(0);

	// 2. The Greeting Content Data
	const greetings = [
		{
			native: 'Mayad nga aga!',
			english: 'Good Morning',
			icon: '🌅',
			theme: '#99cc33', // Greenish Morning
			desc: 'Used when the sun rises.'
		},
		{
			native: 'Mayad nga hapon!',
			english: 'Good Afternoon',
			icon: '☀️',
			theme: '#f97316', // Orange Afternoon
			desc: 'Used after lunch time.'
		},
		{
			native: 'Mayad nga gabi-i!',
			english: 'Good Night',
			icon: '🌙',
			theme: '#2c3e50', // Dark Night
			desc: 'Used before sleeping.'
		}
	];

	// 3. Derived current object
	let current = $derived(greetings[currentIndex]);

	function next() {
		if (currentIndex < greetings.length - 1) currentIndex++;
		else currentIndex = 0; // Loop back
	}

	function prev() {
		if (currentIndex > 0) currentIndex--;
	}
</script>

<main class="viewport" style="--bg-color: {current.theme}">
	{#key currentIndex}
		<div class="slide" in:fly={{ x: 200, duration: 400 }} out:fade>
			<div class="hero-icon">
				{current.icon}
			</div>

			<div class="word-bubble">
				<h1>{current.native}</h1>
				<p class="translation">{current.english}</p>
			</div>

			<p class="description">{current.desc}</p>
		</div>
	{/key}

	<div class="controls">
		<button onclick={prev} disabled={currentIndex === 0} class="nav-btn prev">Back</button>

		<div class="progress">
			{#each greetings as _, i}
				<div class="dot" class:active={i === currentIndex}></div>
			{/each}
		</div>

		<button onclick={next} class="nav-btn next">Next</button>
	</div>
</main>

<style>
	.viewport {
		height: 100vh;
		width: 100%;
		background-color: var(--bg-color);
		transition: background-color 0.8s ease;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-family: 'Quicksand', sans-serif;
		overflow: hidden;
	}

	.slide {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		width: 90%;
	}

	.hero-icon {
		font-size: 8rem;
		margin-bottom: 1rem;
		filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2));
		animation: float 3s ease-in-out infinite;
	}

	/* Matching your "Number in Everyday Stuff" Word Bubble */
	.word-bubble {
		background: white;
		padding: 1.5rem 3rem;
		border-radius: 50px;
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
		border: 6px solid #f06292; /* Common Skills Pink Border */
	}

	.word-bubble h1 {
		font-size: 2.2rem;
		margin: 0;
		color: #333;
		line-height: 1;
	}

	.translation {
		margin: 5px 0 0;
		color: #f06292;
		font-weight: bold;
		text-transform: uppercase;
		font-size: 0.9rem;
	}

	.description {
		color: white;
		margin-top: 2rem;
		font-size: 1.1rem;
		background: rgba(0, 0, 0, 0.2);
		padding: 10px 20px;
		border-radius: 20px;
	}

	/* Bottom Navigation Area */
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
		padding: 1rem 1.5rem;
		border-radius: 20px;
		font-weight: bold;
		color: #ad1457;
		cursor: pointer;
		box-shadow: 0 5px 0 #f8bbd0;
	}

	.nav-btn:active:not(:disabled) {
		transform: translateY(3px);
		box-shadow: none;
	}

	.progress {
		display: flex;
		gap: 10px;
	}

	.dot {
		width: 10px;
		height: 10px;
		background: rgba(255, 255, 255, 0.3);
		border-radius: 50%;
	}

	.dot.active {
		background: white;
		transform: scale(1.4);
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-15px);
		}
	}
</style>

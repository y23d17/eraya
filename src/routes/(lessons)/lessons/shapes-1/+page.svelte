<script>
	import { fly, fade, scale } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';

	// 1. State for Carousel
	let currentIndex = $state(0);

	// 2. Shapes Data - Styled for Common Skills
	const shapes = [
		{
			name: 'Bilog',
			english: 'Circle',
			icon: '⭕',
			example: 'Barya (Coin)',
			bg: '#4db6ac' // Teal
		},
		{
			name: 'Kwadrado',
			english: 'Square',
			icon: '🟦',
			example: 'Regalo (Gift Box)',
			bg: '#ba68c8' // Purple
		},
		{
			name: 'Trayanggulo',
			english: 'Triangle',
			icon: '🔺',
			example: 'Apa (Ice Cream Cone)',
			bg: '#f06292' // Pink
		},
		{
			name: 'Rektanggulo',
			english: 'Rectangle',
			icon: '📘',
			example: 'Libro (Book)',
			bg: '#f44336' // Red
		},
		{
			name: 'Dayamon',
			english: 'Diamond',
			icon: '🔶',
			example: 'Dayamon (Diamond) ',
			bg: '#4caf50' // Gren
		}
	];

	let current = $derived(shapes[currentIndex]);

	const next = () => {
		if (currentIndex < shapes.length - 1) currentIndex++;
	};
	const prev = () => {
		if (currentIndex > 0) currentIndex--;
	};
</script>

{#snippet ShapeCard(item)}
	<div class="hero-visual">
		<div class="shape-display" in:scale={{ duration: 800, easing: elasticOut }}>
			{item.icon}
		</div>
	</div>

	<div class="word-bubble">
		<h1 class="native-text">{item.name}</h1>
		<p class="english-sub">{item.english}</p>
	</div>

	<div class="example-box">
		<p>Parehas Kang: <strong>{item.example}</strong></p>
	</div>
{/snippet}

<main class="viewport" style="background-color: {current.bg}">
	{#key currentIndex}
		<section class="slide-content" in:fly={{ x: 200, duration: 500 }} out:fade>
			{@render ShapeCard(current)}
		</section>
	{/key}

	<footer class="controls">
		<button onclick={prev} disabled={currentIndex === 0} class="nav-btn">Back</button>
		<div class="dots">
			{#each shapes as _, i}
				<div class="dot" class:active={i === currentIndex}></div>
			{/each}
		</div>
		<button onclick={next} disabled={currentIndex === shapes.length - 1} class="nav-btn next"
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
		margin-bottom: 1.5rem;
	}

	.shape-display {
		font-size: 10rem;
		filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2));
		animation: float 3s infinite ease-in-out;
	}

	/* The Signature Bubble (Same as Greetings & Numbers) */
	.word-bubble {
		background: white;
		padding: 1.5rem 3.5rem;
		border-radius: 60px;
		box-shadow: 0 10px 0px rgba(0, 0, 0, 0.1);
		border: 8px solid #fce4ec; /* The Common Skills Pink Border */
		min-width: 280px;
	}

	.native-text {
		font-size: 3rem;
		margin: 0;
		color: #333;
		line-height: 1;
		font-family: Fredoka Regular;
	}

	.english-sub {
		margin: 5px 0 0;
		color: #f06292; /* Deep Pink */
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 2px;
		font-size: 0.9rem;
		font-family: Quicksand Bold;
	}

	.example-box {
		margin-top: 2rem;
		background: rgba(0, 0, 0, 0.15);
		padding: 10px 20px;
		border-radius: 20px;
		color: white;
		font-size: 1.1rem;
		font-family: Quicksand Book;
		display: none;
	}

	/* Navigation UI */
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
		background: rgba(255, 255, 255, 0.3);
		border-radius: 50%;
		transition: 0.3s;
	}

	.dot.active {
		background: white;
		transform: scale(1.5);
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

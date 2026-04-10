<script>
	import { fly, fade, scale } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';

	// 1. State for Carousel
	let currentIndex = $state(0);

	// 2. Feelings Data - Styled for Common Skills
	const feelings = [
		{
			name: 'Malipayon',
			english: 'Happy',
			icon: '😊',
			phrase: 'Malipayon ako kadya.',
			bg: '#ffca28' // Bright Yellow
		},
		{
			name: 'Masubo',
			english: 'Sad',
			icon: '😢',
			phrase: 'Masubo ang akon libayon.',
			bg: '#64b5f6' // Calm Blue
		},
		{
			name: 'Ugot',
			english: 'Angry',
			icon: '😡',
			phrase: 'Indi mag-ugot kana.',
			bg: '#ef5350' // Angry Red
		},
		{
			name: 'Hadluk',
			english: 'Scared',
			icon: '😨',
			phrase: 'Hadluk ako sa kilat.',
			bg: '#9575cd' // Nervous Purple
		},
		{
			name: 'Kadlaw',
			english: 'Laugh',
			icon: '😂',
			phrase: 'Ga kadlaw ako.',
			bg: '#ffca28' // Yellow
		},
		{
			name: 'Yuhum',
			english: 'Smile',
			icon: '😄',
			phrase: 'Ga yuhum ako samtang nakita ta ikaw.',
			bg: '#ffc107' // Amber
		},
		{
			name: 'Hibi',
			english: 'Cry',
			icon: '😭',
			phrase: 'Nag hibi ako kay naba buol ko sa exam.',
			bg: '#03a9f4' // Light blue
		}
	];

	let current = $derived(feelings[currentIndex]);

	const next = () => {
		if (currentIndex < feelings.length - 1) currentIndex++;
	};
	const prev = () => {
		if (currentIndex > 0) currentIndex--;
	};
</script>

{#snippet FeelingCard(item)}
	<div class="hero-visual">
		<div class="feeling-icon" in:scale={{ duration: 800, easing: elasticOut }}>
			{item.icon}
		</div>
	</div>

	<div class="pill-bubble">
		<h1 class="native-title">{item.name}</h1>
		<p class="english-sub">{item.english}</p>
	</div>

	<div class="usage-context">
		<p>"{item.phrase}"</p>
	</div>
{/snippet}

<main class="viewport" style="background-color: {current.bg}">
	{#key currentIndex}
		<div class="slide-wrapper" in:fly={{ x: 200, duration: 500 }} out:fade>
			{@render FeelingCard(current)}
		</div>
	{/key}

	<footer class="ui-layer">
		<button onclick={prev} disabled={currentIndex === 0} class="nav-btn"> Back </button>

		<div class="dot-indicator">
			{#each feelings as _, i}
				<div class="dot" class:active={i === currentIndex}></div>
			{/each}
		</div>

		<button onclick={next} disabled={currentIndex === feelings.length - 1} class="nav-btn next">
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

	.hero-visual {
		margin-bottom: 25px;
	}

	.feeling-icon {
		font-size: 10rem;
		filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.15));
		/* Gentle wobble animation to express emotion */
		animation: wobble 4s infinite ease-in-out;
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
		font-size: 3rem;
		margin: 0;
		color: #333;
		line-height: 1.1;
		font-family: Fredoka Regular;
	}

	.english-sub {
		margin: 0;
		color: #f06292; /* Deep Pink Branding */
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 2px;
		font-size: 1rem;
		font-family: Quicksand Bold;
	}

	.usage-context {
		margin-top: 2.5rem;
		background: rgba(255, 255, 255, 0.25);
		padding: 15px 30px;
		border-radius: 25px;
		color: white;
		font-size: 1.2rem;
		font-style: italic;
		backdrop-filter: blur(8px);
		border: 2px solid rgba(255, 255, 255, 0.3);
		font-family: Quicksand Bold;
	}

	/* UI Navigation */
	.ui-layer {
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

	.dot-indicator {
		display: flex;
		gap: 12px;
	}

	.dot {
		width: 12px;
		height: 12px;
		background: rgba(255, 255, 255, 0.4);
		border-radius: 50%;
		transition: transform 0.3s;
	}

	.dot.active {
		background: white;
		transform: scale(1.4);
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

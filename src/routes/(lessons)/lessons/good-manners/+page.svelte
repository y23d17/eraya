<script>
	import { fly, fade, scale } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';

	// 1. State for Carousel
	let currentIndex = $state(0);

	// 2. Good Manners Data - Styled for Common Skills
	const manners = [
		{
			name: 'Salamat',
			english: 'Thank You',
			icon: '🙏',
			phrase: 'Salamat sa imo bulig.',
			bg: '#ffb74d' // Warm Orange
		},
		{
			name: 'Palihog',
			english: 'Please',
			icon: '🙋‍♂️',
			phrase: 'Palihog, pwedeng mangayo?',
			bg: '#81c784' // Kind Green
		},
		{
			name: 'Pasensya',
			english: 'Sorry',
			icon: '🥺',
			phrase: 'Pasensya gid, indi ko hungod.',
			bg: '#4fc3f7' // Soft Blue
		},
		{
			name: 'Tabi',
			english: 'Excuse Me',
			icon: '🚶',
			phrase: 'Tabi lang po, maagi ako.',
			bg: '#ba68c8' // Polite Purple
		}
	];

	let current = $derived(manners[currentIndex]);

	const next = () => {
		if (currentIndex < manners.length - 1) currentIndex++;
	};
	const prev = () => {
		if (currentIndex > 0) currentIndex--;
	};
</script>

{#snippet MannerCard(item)}
	<div class="hero-visual">
		<div class="manner-icon" in:scale={{ duration: 800, easing: elasticOut }}>
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
			{@render MannerCard(current)}
		</div>
	{/key}

	<footer class="ui-layer">
		<button onclick={prev} disabled={currentIndex === 0} class="nav-btn"> Back </button>

		<div class="dot-indicator">
			{#each manners as _, i}
				<div class="dot" class:active={i === currentIndex}></div>
			{/each}
		</div>

		<button onclick={next} disabled={currentIndex === manners.length - 1} class="nav-btn next">
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

	.manner-icon {
		font-size: 10rem;
		filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.15));
		/* Gentle bobbing animation */
		animation: bob 3s infinite ease-in-out;
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
		line-height: 1;
	}

	.english-sub {
		margin: 0;
		color: #f06292; /* Deep Pink branding */
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 2px;
		font-size: 1rem;
	}

	.usage-context {
		margin-top: 2.5rem;
		background: rgba(255, 255, 255, 0.2);
		padding: 15px 30px;
		border-radius: 25px;
		color: white;
		font-size: 1.2rem;
		font-style: italic;
		backdrop-filter: blur(8px);
		border: 2px solid rgba(255, 255, 255, 0.3);
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

	@keyframes bob {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-15px);
		}
	}
</style>

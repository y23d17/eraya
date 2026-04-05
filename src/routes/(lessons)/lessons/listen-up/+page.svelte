<script>
	import { fly, fade, scale } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';

	let currentIndex = $state(0);

	const messages = [
		{
			title: 'Paminawa Kam',
			subtitle: 'Listen carefully',
			icon: '👂',
			bg: '#42a5f5'
		},
		{
			title: 'Dumara Kamo',
			subtitle: 'Gather around',
			icon: '📢',
			bg: '#66bb6a' // Green
		},
		{
			title: 'Paminawa Kam Sanda',
			subtitle: 'Pay attention',
			icon: '🤔',
			bg: '#ffa726'
		},
		{
			title: 'Tigam Kamo',
			subtitle: 'Take note',
			icon: '📝',
			bg: '#ba68c8' // Purple
		}
	];

	let current = $derived(messages[currentIndex]);

	const next = () => {
		if (currentIndex < messages.length - 1) currentIndex++;
	};

	const prev = () => {
		if (currentIndex > 0) currentIndex--;
	};
</script>

{#snippet MessageCard(item)}
	<div class="hero-visual">
		<div class="message-icon" in:scale={{ duration: 800, easing: elasticOut }}>
			{item.icon}
		</div>
	</div>
	<div class="pill-bubble">
		<h1 class="title">{item.title}</h1>
		<p class="subtitle">{item.subtitle}</p>
	</div>
{/snippet}

<main class="viewport" style="background-color: {current.bg}">
	{#key currentIndex}
		<div class="slide-wrapper" in:fly={{ x: 200, duration: 500 }} out:fade>
			{@render MessageCard(current)}
		</div>
	{/key}
	<footer class="ui-layer">
		<button onclick={prev} disabled={currentIndex === 0} class="nav-btn"> Balik </button>
		<div class="dot-indicator">
			{#each messages as _, i}
				<div class="dot" class:active={i === currentIndex}></div>
			{/each}
		</div>
		<button onclick={next} disabled={currentIndex === messages.length - 1} class="nav-btn next">
			Sunod
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
		font-size: 3rem;
		margin: 0;
		color: #333;
		line-height: 1.1;
	}

	.subtitle {
		margin: 0;
		color: #f06292;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 2px;
		font-size: 1rem;
	}

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

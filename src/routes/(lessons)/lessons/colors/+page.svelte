<script>
	import { fly, fade, scale } from 'svelte/transition';

	// 1. State for Carousel
	let currentIndex = $state(0);

	// 2. Colors Data - Styled for Common Skills
	const colors = [
		{
			name: 'Pula',
			english: 'Red',
			icon: '🍎',
			example: 'Mansanas (Apple)',
			bg: '#ef5350'
		},
		{
			name: 'Asul',
			english: 'Blue',
			icon: '💧',
			example: 'Tubig (Water)',
			bg: '#42a5f5'
		},
		{
			name: 'Kanaryo',
			english: 'Yellow',
			icon: '☀️',
			example: 'Adlaw (Sun)',
			bg: '#ffca28'
		},
		{
			name: 'Kahel',
			english: 'Orange',
			icon: '🏀',
			example: 'Bola (Ball)',
			bg: '#ff9800'
		},
		{
			name: 'Puti',
			english: 'White',
			icon: '☁️',
			example: 'Gal-um (Cloud)',
			bg: '#dedede'
		},
		{
			name: 'Itum',
			english: 'Black',
			icon: '💣💣',
			example: 'Bomba (Bomb)',
			bg: '#333333'
		}
	];

	let current = $derived(colors[currentIndex]);

	const next = () => {
		if (currentIndex < colors.length - 1) currentIndex++;
	};
	const prev = () => {
		if (currentIndex > 0) currentIndex--;
	};
</script>

{#snippet ColorCard(item)}
	<div class="hero-visual">
		<div class="color-splash" in:scale={{ duration: 600 }}>
			{item.icon}
		</div>
	</div>

	<div class="word-bubble">
		<h1 class="native-text">{item.name}</h1>
		<p class="english-sub">{item.english}</p>
	</div>

	<div class="example-box">
		<p>Parehas kang: <strong>{item.example}</strong></p>
	</div>
{/snippet}

<main class="viewport" style="background-color: {current.bg}">
	{#key currentIndex}
		<section class="slide-content" in:fly={{ x: 200, duration: 500 }} out:fade>
			{@render ColorCard(current)}
		</section>
	{/key}

	<footer class="controls">
		<button onclick={prev} disabled={currentIndex === 0} class="nav-btn">Back</button>
		<div class="dots">
			{#each colors as _, i}
				<div class="dot" class:active={i === currentIndex}></div>
			{/each}
		</div>
		<button onclick={next} disabled={currentIndex === colors.length - 1} class="nav-btn next"
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
		transition: background-color 0.8s ease; /* Smooth background shift */
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

	.color-splash {
		font-size: 10rem;
		filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.15));
		animation: sway 4s infinite ease-in-out;
	}

	/* Signature Common Skills Bubble */
	.word-bubble {
		background: white;
		padding: 1.5rem 3.5rem;
		border-radius: 60px;
		box-shadow: 0 10px 0px rgba(0, 0, 0, 0.1);
		border: 8px solid #fce4ec; /* Pink branding */
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
		font-family: Quicksand Bold;
		font-size: 0.9rem;
	}

	.example-box {
		margin-top: 2rem;
		background: rgba(0, 0, 0, 0.1);
		padding: 12px 24px;
		border-radius: 20px;
		color: white;
		font-size: 1.1rem;
		font-family: Quicksand Book;
		backdrop-filter: blur(5px);
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

	@keyframes sway {
		0%,
		100% {
			transform: rotate(-5deg) translateY(0);
		}
		50% {
			transform: rotate(5deg) translateY(-10px);
		}
	}
</style>

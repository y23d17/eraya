<script>
	import Sun from '@/lib/assets/images/sun-morning.svg';
	import Mountain from '@/lib/assets/images/mountain.svg';
	import Pathway from '@/lib/assets/images/pathway.svg';
	import Signage from '@/lib/assets/images/signage.svg';
	import { goto } from '$app/navigation';
	import { fade, fly, scale } from 'svelte/transition';
	import { cubicIn, cubicInOut, elasticIn, elasticInOut } from 'svelte/easing';

	let show = $state(true);
</script>

<main class="responsive no-padding" in:fade={{ duration: 3000, easing: cubicIn }}>
	<div id="sun-container" in:fly={{ y: 400, duration: 5000, easing: cubicInOut }}>
		<img src={Sun} alt="sun" id="sun" in:fade={{ duration: 2000, easing: cubicInOut }} />
	</div>

	<div id="text-container" in:scale={{ delay: 5000, duration: 500, easing: elasticInOut }}>
		<h1>Mayad nga aga!</h1>
	</div>

	<img src={Mountain} alt="mountain" id="mountain" />

	<div id="ground-layer">
		<img src={Pathway} alt="pathway" id="pathway" />
		<img
			src={Signage}
			alt="signage"
			width={320}
			id="signage-btn"
			onclick={() =>
				setTimeout(() => {
					goto('/lessons/greetings-1/good-afternoon');
				}, 300)}
			in:fly={{ y: 500, delay: 6000, duration: 500, elasticIn }}
		/>
	</div>
</main>

<style>
	main {
		position: relative;
		width: 100%;
		height: 100vh;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: linear-gradient(to bottom, #99cc33 0%, #f2e33e 30%, #ff9900 60%, #76b852 100%);
	}

	#sun-container {
		margin-top: 10%;
		z-index: 2;
		display: flex;
		align-self: flex-start;
		z-index: 0;
	}

	#sun {
		width: 14rem;
		height: auto;
		/* Optional: subtle pulse animation */
		animation: pulse 4s ease-in-out infinite;
	}

	#text-container h1 {
		font-family: Chewy;
		color: white;
		text-align: center;
		font-size: 4rem;
		line-height: 0.9;
		-webkit-text-stroke: 2px #2d3436;
		text-shadow: 4px 4px 0px rgba(0, 0, 0, 0.1);
		margin-top: 20px;
	}

	#mountain {
		position: absolute;
		bottom: 35%; /* Adjust this to sit on the grass line */
		width: 100%;
		z-index: 1;
	}

	#ground-layer {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 75%;
		z-index: 2;
	}

	#pathway {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	#signage-btn {
		position: absolute;
		right: -1px;
		bottom: -10px;
		border: none;
		cursor: pointer;
		width: auto;
		height: auto;
		transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	#signage-btn:active {
		transform: scale(0.9) rotate(-5deg);
	}

	@keyframes pulse {
		0%,
		100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.1);
		}
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}
</style>

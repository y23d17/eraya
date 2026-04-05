<script>
	import Bird1 from '@/lib/assets/images/bird-1.svg';
	import Bird2 from '@/lib/assets/images/bird-2.svg';
	import Sunset from '@/lib/assets/images/sunset.svg';
	import Ocean from '@/lib/assets/images/ocean.svg';
	import Sailboat from '@/lib/assets/images/boat.svg';
	import { goto } from '$app/navigation';
</script>

<main class="responsive no-padding">
	<img src={Bird1} alt="bird 1" id="bird-1" />
	<img src={Bird2} alt="bird 2" id="bird-2" />

	<div id="text-container">
		<h1>Mayad nga hapon!</h1>
	</div>

	<div id="sun-wrapper">
		<img src={Sunset} alt="sunset" id="sun" />
	</div>

	<div id="ocean-wrapper">
		<img src={Ocean} alt="ocean" id="ocean" />
		<img
			src={Sailboat}
			alt="sailboat"
			id="boat-btn"
			onclick={() => goto('/lessons/greetings-1/good-evening')}
		/>
	</div>
</main>

<style>
	main {
		position: relative;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: linear-gradient(
			to bottom,
			#ffcc33 0%,
			#f39233 25%,
			#e96434 45%,
			#1d4e89 70%,
			#adb5bd 100%
		);
	}

	#bird-1 {
		position: absolute;
		top: 1%;
		width: 60%;
		opacity: 0.8;
	}

	#bird-2 {
		position: absolute;
		top: 25%;
		right: 50%;
		width: 40%;
		opacity: 0.8;
	}

	#text-container {
		font-family: Chewy;
		color: white;
		text-align: center;
		font-size: 3rem;
		margin-top: 45vh;
		-webkit-text-stroke: 2px #2d3436;
		line-height: 1;
		z-index: 10;
	}

	#sun-wrapper {
		position: absolute;
		top: 65%;
		width: 50%;
		z-index: 5;
	}

	#sun {
		width: 100%;
		height: auto;
	}

	#ocean-wrapper {
		position: absolute;
		top: 1;
		bottom: 0;
		width: 100%;
		height: 30%; /* Matches the teal part of the gradient */
		z-index: 0;
	}

	#ocean {
		position: absolute;
		top: 1;
		bottom: 0;
	}

	#boat-btn {
		position: absolute;
		bottom: 15%;
		right: -1%;
		background: none;
		border: none;
		width: 160px;
		cursor: pointer;
		transition: transform 0.3s ease;
		filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.2));
		animation: bob 3s ease-in-out infinite;
	}

	#boat-btn:hover {
		transform: translateY(-5px) scale(1.05);
	}

	@keyframes bob {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-8px);
		}
	}
</style>

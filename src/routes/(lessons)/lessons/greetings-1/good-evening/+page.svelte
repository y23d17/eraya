<script>
	import Moon from '@/lib/assets/images/moon.svg';
	import Stars from '@/lib/assets/images/stars.svg';
	import City from '@/lib/assets/images/city-skyline.svg';
	import Road from '@/lib/assets/images/road.svg';
	import Sign from '@/lib/assets/images/road-sign.svg';
	import { goto } from '$app/navigation';
</script>

<main class="responsive no-padding">
	<div id="stars-layer">
		<img src={Stars} alt="stars" id="stars" />
	</div>

	<div id="moon-container">
		<img src={Moon} alt="moon" />
	</div>

	<div id="text-container">
		<h1>Mayad nga gabi-i!</h1>
	</div>

	<div id="city-container">
		<img src={City} alt="city" />
	</div>

	<div id="road-container">
		<img src={Road} alt="road" id="road" />
		<img src={Sign} alt="sign" id="road-sign-btn" onclick={() => goto('/lessons')} />
	</div>
</main>

<style>
	main {
		position: relative;
		overflow: hidden;
		background: linear-gradient(
			to bottom,
			#0d1412 0%,
			#333d3d 30%,
			#1a1a1a 60%,
			#162a3a 85%,
			#2a5a75 100%
		);
	}

	#stars-layer {
		position: absolute;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 0;
	}

	#moon-container {
		position: absolute;
		top: 10%;
		left: 5%;
		width: 40%;
		filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.2));
	}

	#text-container h1 {
		font-family: Chewy;
		color: white;
		text-align: center;
		font-size: 3.6rem;
		margin-top: 45vh;
		line-height: 0.9;
		-webkit-text-stroke: 2px #1a2521;
		z-index: 10;
		position: relative;
	}

	#city-container {
		position: absolute;
		bottom: 120px;
		width: 110%;
		left: -5%;
		z-index: 1;
	}

	#road-container {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 150px;
		z-index: 5;
	}

	#road {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	#road-sign-btn {
		position: absolute;
		right: 5%;
		bottom: -1%;
		width: 130px;
		background: none;
		border: none;
		cursor: pointer;
		transition: transform 0.2s;
	}

	#road-sign-btn:active {
		transform: scale(0.95);
	}
</style>

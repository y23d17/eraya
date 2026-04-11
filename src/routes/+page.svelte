<script>
	import { goto } from '$app/navigation';
	import Eraya from '@/lib/assets/images/eraya.png';
</script>

<main class="responsive no-padding">
	<div id="brand-container">
		<center><img src={Eraya} alt="eraya" width={420} /></center>
	</div>

	<div id="bottom-container" class="center-align">
		<button id="er-start-btn" onclick={() => goto('/home')}> Umpisa Ta! </button>
	</div>
</main>

<style>
	main {
		position: relative;
		display: flex;
		flex-direction: column;
		background-color: #ef5350;
	}

	#brand-container {
		height: 90vh;
		align-content: center;
	}

	#bottom-container {
		height: 10vh;
	}

	#er-start-btn {
		background-color: #1fd83e;
		border-bottom: solid #08961f 5px;
		color: #ffffff;
		font-family: Fredoka Regular;
		font-size: 2rem;
		width: 90%;
		height: 80px;
	}

	#er-start-btn:active {
		background-color: #1fd83e;
		border: solid #08961f 5px;
		border-bottom: none;
	}
</style>

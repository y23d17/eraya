<script>
	import { goto } from '$app/navigation';
	import Close from '@/lib/assets/images/exit.png';

	let { navigation } = $props();
</script>

<nav class="padding right-align">
	<button id="er-close-btn" onclick={() => goto(`/${navigation}`)}>
		<img src={Close} alt="close" />
	</button>
</nav>

<style>
	nav {
		position: fixed;
		z-index: 99;
		top: 0;
		bottom: 1;
		right: 0;
		left: 0;
	}

	#er-close-btn {
		width: 40px;
		height: 40px;
		border-radius: 1rem;
		border: none;
		background: white;
		font-size: 2rem;
		cursor: pointer;
		box-shadow: 0 6px 0 #ddd;
		transition: all 0.1s;
	}

	#er-close-btn:active {
		transform: translateY(4px);
		box-shadow: 0 2px 0 #ddd;
	}
</style>

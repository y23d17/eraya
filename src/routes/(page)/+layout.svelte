<script>
	import Home from '@/lib/assets/images/home.png';
	import Lessons from '@/lib/assets/images/lesson.png';
	import Games from '@/lib/assets/images/games.png';
	import Books from '@/lib/assets/images/books.png';

	let { children } = $props();
</script>

{@render children()}

<nav class="bottom bg-color-deep-space">
	<div class="wave max">
		<a href="/home" class="vertical">
			<img src={Home} alt="home" />
			<div>Home</div>
		</a>
	</div>

	<div class="wave max">
		<a href="/lessons" class="vertical">
			<img src={Lessons} alt="lessons" />
			<div>Lessons</div>
		</a>
	</div>

	<div class="wave max">
		<a href="/games" class="vertical">
			<img src={Games} alt="games" />
			<div>Games</div>
		</a>
	</div>

	<div class="wave max">
		<a href="/library" class="vertical">
			<img src={Books} alt="books" />
			<div>Library</div>
		</a>
	</div>
</nav>

<style>
	nav {
		overflow: hidden;
	}
	nav > a {
		padding: auto;
		margin: 0;
	}

	nav > div > a > img {
		width: 48px;
		height: 48px;
		padding: 0.3rem;
	}

	a > div {
		font-family: Fredoka Regular;
	}
</style>

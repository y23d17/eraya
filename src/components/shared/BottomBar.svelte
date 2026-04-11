<script>
	import Home from '@/lib/assets/images/home.png';
	import Lessons from '@/lib/assets/images/lesson.png';
	import Games from '@/lib/assets/images/games.png';
	import Books from '@/lib/assets/images/books.png';
	import { page } from '$app/state';

	let currentPage = $page.url.pathname;
	$: currentPage = $page.url.pathname;

	const navItems = [
		{ name: 'Home', href: '/home', img: Home },
		{ name: 'Lessons', href: '/lessons', img: Lessons },
		{ name: 'Games', href: '/games', img: Games },
		{ name: 'Library', href: '/library', img: Books }
	];
</script>

<nav class="bottom bg-color-deep-space">
	{#each navItems as item}
		<div class="wave max">
			<a href={item.href} class="vertical" class:active={currentPage === item.href}>
				<img src={item.img} alt={item.name} />
				<div>{item.name}</div>
			</a>
		</div>
	{/each}
</nav>

<style>
	nav {
		overflow: hidden;
	}

	nav > div > a > img {
		width: 48px;
		height: 48px;
	}

	a > div {
		font-family: Fredoka Regular;
	}

	.active {
		color: red;
	}
</style>

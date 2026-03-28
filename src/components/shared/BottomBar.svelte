<script>
	import Home from '@/lib/assets/images/home.png';
	import Lessons from '@/lib/assets/images/lesson.png';
	import Games from '@/lib/assets/images/games.png';
	import Books from '@/lib/assets/images/books.png';
</script>

<nav class="bottom">
	<a href="/home">
		<button class="circle transparent">
			<img src={Home} alt="home" />
		</button>
		<div>Home</div>
	</a>

	<a href="/lessons">
		<button class="circle transparent">
			<img src={Lessons} alt="lessons" />
		</button>

		<div>Lessons</div>
	</a>

	<a href="/games">
		<button class="circle transparent">
			<img src={Games} alt="games" />
		</button>

		<div>Games</div>
	</a>

	<a href="/library">
		<button class="circle transparent">
			<img src={Books} alt="books" />
		</button>

		<div>Library</div>
	</a>
</nav>

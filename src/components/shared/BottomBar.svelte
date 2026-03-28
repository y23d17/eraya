<script>
	import Lessons from '@/lib/assets/images/lesson.png';
	import Games from '@/lib/assets/images/games.png';
	import Books from '@/lib/assets/images/books.png';
</script>

<nav class="bottom">
	<a href="/home">
		<i>home</i>
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
			<img src={Games} alt="lessons" />
		</button>

		<div>Games</div>
	</a>

	<a href="/library">
		<button class="circle transparent">
			<img src={Books} alt="lessons" />
		</button>

		<div>Library</div>
	</a>
</nav>

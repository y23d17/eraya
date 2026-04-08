<script>
	let items = [
		{ name: 'Apple', category: 'Food' },
		{ name: 'Red', category: 'Color' },
		{ name: 'Five', category: 'Number' },
		{ name: 'Mother', category: 'Family' },
		{ name: 'Car', category: 'Vehicle' },
		{ name: 'Banana', category: 'Food' },
		{ name: 'Blue', category: 'Color' },
		{ name: 'Seven', category: 'Number' },
		{ name: 'Father', category: 'Family' },
		{ name: 'Bike', category: 'Vehicle' }
	];

	let categories = ['Food', 'Color', 'Number', 'Family', 'Vehicle'];
	let selectedCategory;
	let score = 0;

	function findItem() {
		if (selectedCategory) {
			let randomItem = items[Math.floor(Math.random() * items.length)];
			if (randomItem.category === selectedCategory) {
				score++;
				alert(`Correct! ${randomItem.name} is a ${randomItem.category}.`);
			} else {
				alert(`Incorrect. ${randomItem.name} is a ${randomItem.category}.`);
			}
		}
	}
</script>

<main>
	<h1>Find It!</h1>
	<select bind:value={selectedCategory}>
		{#each categories as category}
			<option value={category}>{category}</option>
		{/each}
	</select>
	<button on:click={findItem}>Find Item</button>
	<p>Score: {score}</p>
</main>

<style>
	main {
		font-family: Arial, sans-serif;
		background-color: #f0f0f0;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}

	h1 {
		color: #333;
	}

	select {
		padding: 10px;
		border: none;
		border-radius: 5px;
		background-color: #fff;
	}

	button {
		padding: 10px 20px;
		border: none;
		border-radius: 5px;
		background-color: #4caf50;
		color: #fff;
		cursor: pointer;
	}

	button:hover {
		background-color: #3e8e41;
	}
</style>

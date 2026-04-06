<script lang="ts">
	import { fly, fade, scale } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';

	let colors = [
		{ name: 'Pula', color: '#ef5350', icon: 'Pula' },
		{ name: 'Asul', color: '#42a5f5', icon: 'Asul' },
		{ name: 'Kanaryo', color: '#ffca28', icon: 'Kanaryo' },
		{ name: 'Berdi', color: '#66bb6a', icon: 'Berdi' }
	];
	let box1 = $state(null);
	let box2 = $state(null);
	let result = $state('');
	let bg = $state('#fff');

	const handleDrop = (box, color) => {
		if (box === 1) {
			box1 = color;
		} else {
			box2 = color;
		}
		if (box1 && box2) {
			fuseColors();
		}
	};

	const fuseColors = () => {
		if (box1 && box2) {
			const fusedColors = {
				'Pula-Asul': '#8e24aa',
				'Pula-Kanaryo': '#ff6e40',
				'Pula-Berdi': '#8bc34a',
				'Asul-Kanaryo': '#26c6da',
				'Asul-Berdi': '#4fc3f7',
				'Kanaryo-Berdi': '#7cb342',
				'Asul-Pula': '#8e24aa',
				'Kanaryo-Pula': '#ff6e40',
				'Berdi-Pula': '#8bc34a',
				'Kanaryo-Asul': '#26c6da',
				'Berdi-Asul': '#4fc3f7',
				'Berdi-Kanaryo': '#7cb342',
				'Pula-Pula': '#ef5350',
				'Asul-Asul': '#42a5f5',
				'Kanaryo-Kanaryo': '#ffca28',
				'Berdi-Berdi': '#66bb6a'
			};
			const key = `${box1.name}-${box2.name}`;
			result = Object.keys(fusedColors).includes(key) ? fusedColor(key) : 'Unknown';
			bg = fusedColors[key] || '#fff';
		}
	};

	const fusedColor = (key) => {
		switch (key) {
			case 'Pula-Asul':
			case 'Asul-Pula':
				return 'Lidong';
			case 'Pula-Kanaryo':
			case 'Kanaryo-Pula':
				return 'Kahel';
			case 'Pula-Berdi':
			case 'Berdi-Pula':
				return 'Berdi nga Pula';
			case 'Asul-Kanaryo':
			case 'Kanaryo-Asul':
				return 'Turquesa';
			case 'Asul-Berdi':
			case 'Berdi-Asul':
				return 'Berdi nga Asul';
			case 'Kanaryo-Berdi':
			case 'Berdi-Kanaryo':
				return 'Kalamansi';
			case 'Pula-Pula':
				return 'Pula';
			case 'Asul-Asul':
				return 'Asul';
			case 'Kanaryo-Kanaryo':
				return 'Kanaryo';
			case 'Berdi-Berdi':
				return 'Berdi';
			default:
				return 'Unknown';
		}
	};

	const handleDragStart = (color) => {
		return (e) => {
			e.dataTransfer.setData('color', JSON.stringify(color));
		};
	};

	const handleDragOver = (e) => {
		e.preventDefault();
	};

	const handleDropBox = (box) => {
		return (e) => {
			e.preventDefault();
			const color = JSON.parse(e.dataTransfer.getData('color'));
			handleDrop(box, color);
		};
	};

	const reset = () => {
		box1 = null;
		box2 = null;
		result = '';
		bg = '#fff';
	};
</script>

<main class="viewport" style="background-color: {bg}">
	<div>
		<h3>Drag and drop the color to the box.</h3>
	</div>
	<div class="colors grid">
		{#each colors as color}
			<div
				class="color s3"
				style="background-color: {color.color}"
				draggable="true"
				ondragstart={handleDragStart(color)}
			>
				{color.icon}
			</div>
		{/each}
	</div>
	<div class="large-space"></div>
	<div class="boxes">
		<div
			class="box"
			style="background-color: {box1 ? box1.color : ''}"
			ondragover={handleDragOver}
			ondrop={handleDropBox(1)}
		></div>
		<div
			class="box"
			style="background-color: {box2 ? box2.color : ''}"
			ondragover={handleDragOver}
			ondrop={handleDropBox(2)}
		></div>
	</div>
	{#if result}
		<div class="result">
			<p>{result}</p>
		</div>
		<div class="medium-space"></div>
		<button class="reset-btn" onclick={reset}>Reset</button>
	{/if}
</main>

<style>
	.viewport {
		height: 100vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-family: 'Quicksand', sans-serif;
		transition: background-color 0.5s ease;
	}

	.color {
		margin: 10px;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
		font-family: Quicksand Bold;
		font-size: 1rem;
		border-radius: 1rem;
		padding: 1rem;
		box-shadow: 0 3px 0 rgba(0, 0, 0, 0.5);
	}

	.boxes {
		display: flex;
		gap: 10px;
	}

	.box {
		width: 200px;
		height: 200px;
		border: 1px solid #ccc;
		border-radius: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: background-color 0.5s ease;
	}

	.result {
		margin-top: 20px;
		font-size: 2rem;
		color: #fff;
		font-family: Fredoka Regular;
	}

	.reset-btn {
		background: white;
		border: none;
		padding: 1.1rem 2rem;
		border-radius: 25px;
		font-weight: bold;
		color: #ad1457;
		box-shadow: 0 6px 0 #f8bbd0;
		cursor: pointer;
		font-family: Fredoka Regular;
		font-size: 1.2rem;
	}

	.reset-btn:active:not(:disabled) {
		transform: translateY(4px);
		box-shadow: 0 2px 0 #f8bbd0;
	}

	div > h3 {
		font-family: Fredoka Regular;
		color: #333333;
		text-align: center;
	}
</style>

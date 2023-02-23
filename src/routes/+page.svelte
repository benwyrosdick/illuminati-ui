<script>
	/** @type {import('./$types').PageData} */
	export let data;

	import Color from './Color.svelte';
	import Swatch from './Swatch.svelte';
	import Theme from './Theme.svelte';

	$: usedColors = data.routine.args.colors || [];
	$: usedRoutine = data.routine.name;
	$: usedDelay = (data.routine.args.delay || 500);
	$: usedLength = data.routine.args.length;
	$: usedSpacing = data.routine.args.spacing;
	$: usedSurroundSpacing = data.routine.args.surround_spacing;
	$: usedReverse = data.routine.args.reverse;

	const removeColor = (rgb, idx) => (e) => {
		data.routine.args.colors = data.routine.args.colors.filter((_rgb, _idx) => _idx !== idx);
	};

	const addColor = (rgb, replace = false) => (e) => {
		if (replace) {
			data.routine.args.colors = rgb;
		} else {
			data.routine.args.colors = data.routine.args.colors.concat([rgb]);
		}
	};

	$: if (usedColors || usedRoutine) {
		let params = [];

		if (usedColors.length) {
			for (let i = 0; i < usedColors.length; i++) {
				params.push(`color=${usedColors[i].map((v) => v.toString(16).padStart(2, '0')).join('')}`);
			}
		} else {
			params.push('color=000000');
		}

		if (usedDelay !== undefined) {
			params.push(`delay=${usedDelay}`);
		}

		if (usedLength !== undefined) {
			params.push(`length=${usedLength}`);
		}

		if (usedSpacing !== undefined) {
			params.push(`spacing=${usedSpacing}`);
		}

		if (usedSurroundSpacing !== undefined) {
			params.push(`surround_spacing=${usedSurroundSpacing}`);
		}

		if (usedReverse) {
			params.push(`reverse=true`);
		}

		const url = `http://10.0.0.50:5000/routine/${usedRoutine}?${params.join('&')}`
		fetch(url);
	}
</script>

<h1>Illuminati</h1>

<h2>Current Routine</h2>
<h3>Routine: {data.routine.name}</h3>

<h3>Colors</h3>
<div class="row">
	{#each usedColors as rgb, idx}
		<div on:click={removeColor(rgb, idx)}>
			<Swatch {rgb} />
		</div>
	{/each}
</div>

<h2>Options</h2>
<h3>Routines</h3>
{#each data.routines as name}
<button on:click={() => data.routine.name = name}>{name}</button>
{/each}

<h3>Delay</h3>
<label>
	<input type=number bind:value={data.routine.args.delay} min=5 max=1000>
	<input type=range bind:value={data.routine.args.delay} min=5 max=1000>
</label>

<h3>Length</h3>
<label>
	<input type=number bind:value={data.routine.args.length} min=1 max=50>
	<input type=range bind:value={data.routine.args.length} min=1 max=50>
</label>

<h3>Spacing</h3>
<label>
	<input type=number bind:value={data.routine.args.spacing} min=0 max=50>
	<input type=range bind:value={data.routine.args.spacing} min=0 max=50>
</label>

<h3>Surround Spacing</h3>
<label>
	<input type=number bind:value={data.routine.args.surround_spacing} min=0 max=50>
	<input type=range bind:value={data.routine.args.surround_spacing} min=0 max=50>
</label>

<h3>Reverse</h3>
<label>
	<input type=checkbox bind:checked={data.routine.args.reverse}>
	Reverse
</label>

<h3>Colors</h3>
<div class="row">
	{#each Object.keys(data.colors) as name}
		<Color {name} rgb={data.colors[name]} {addColor} />
	{/each}
</div>

<h3>Themes</h3>
<div class="row">
	{#each Object.keys(data.themes) as name}
		<Theme {name} colors={data.themes[name]} {addColor} />
	{/each}
</div>

<style>
	.row {
		display: flex;
		flex-direction: row;
	}
</style>

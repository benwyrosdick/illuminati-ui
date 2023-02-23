<script>
	export let name;
	export let colors;
	export let addColor;

  const gradient = "repeating-linear-gradient(45deg, " + colors.map((color, i) => `rgb(${color.join(",")}) ${i*10}px, rgb(${color.join(",")}) ${i*10+10}px`).join(",") + ")";
</script>

<div class='theme'>
  <div class='title'>{name}</div>
  <div class="swatch" style="background: {gradient}" on:click={addColor(colors, true)} />
</div>

<style>
	.theme {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 5px;
	}

	.swatch {
		width: 100px;
		height: 100px;
		border: 1px solid darkgrey;
	}

	.title {
    font-size: 1.2em;
    font-weight: bold;
    display: flex;
    justify-content: center;
  }
</style>

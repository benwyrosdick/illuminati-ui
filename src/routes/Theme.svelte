<script>
	export let name;
	export let colors;
	export let addColor;

  const gradient = "repeating-linear-gradient(45deg, " + colors.map((color, i) => `rgb(${color.join(",")}) ${i*10}px, rgb(${color.join(",")}) ${i*10+10}px`).join(",") + ")";
</script>

<div>
  <div>{name}</div>
  <div class="swatch" style="background: {gradient}" on:click={addColor(colors, true)} />
</div>

<style>
	.swatch {
		width: 100px;
		height: 100px;
	}
</style>

<script>
	export let rgb;
</script>

<div>
  <div class="swatch" style="background-color: rgb({rgb.join(',')})" />
</div>

<style>
	.swatch {
		width: 100px;
		height: 100px;
		border: 1px solid darkgrey;
	}
</style>

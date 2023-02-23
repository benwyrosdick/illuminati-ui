<script>
	export let name;
	export let rgb;
  export let addColor;

  import Swatch from './Swatch.svelte';
</script>

<div>
  <div>{name}</div>
  <div on:click={addColor(rgb)} >
    <Swatch {rgb} />
  </div>
</div>

<style>
</style>

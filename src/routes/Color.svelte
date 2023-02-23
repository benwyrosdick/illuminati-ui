<script>
	export let name;
	export let rgb;
  export let addColor;

  import Swatch from './Swatch.svelte';
</script>

<div class='color'>
  <div class='title'>{name}</div>
  <div on:click={addColor(rgb)} >
    <Swatch {rgb} />
  </div>
</div>

<style>
  .color {
    display: flex;
		flex-direction: column;
		align-items: center;
		margin: 5px;
  }

  .title {
    font-size: 1.2em;
    font-weight: bold;
    display: flex;
    justify-content: center;
  }
</style>

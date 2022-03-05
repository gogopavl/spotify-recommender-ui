<script>
  import Nav from "../components/nav.svelte";
  import { onMount } from "svelte";

  let pageHasLoaded = false;

  onMount(() => {
    pageHasLoaded = true;
  });
</script>

{#if !pageHasLoaded}
  <div class="loader"><img src="/spinner.svg" alt="" /></div>
{/if}

<div class="p-8 max-w-6xl mx-auto">
  <Nav />
  <slot />
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Sulphur+Point&display=swap");
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  :global(body) {
    font-family: "Sulphur Point", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    color: white;
    background-color: #1e293b;
  }

  :global(.debug) {
    border: solid 2px;
    border-color: red;
  }

  :global(.loader) {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: grid;
    place-items: center;
    background-color: #1e293b;
    z-index: 9999;
  }
</style>

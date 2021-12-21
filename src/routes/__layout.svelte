<script>
  import Nav from "../components/nav.svelte";
</script>

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
</style>

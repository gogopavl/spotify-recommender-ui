<script>
  import Heading from "../components/heading.svelte";
  import TextInput from "../components/text-input.svelte";

  const PAGE_NAME = "Gimmetext";
</script>

<svelte:head>
  <title>Spotify Playlist Recommender - {PAGE_NAME}</title>
</svelte:head>

<Heading heading={PAGE_NAME} />

<div class="p-4 gap-4 grid grid-cols-1 justify-items-center max-w-xl mx-auto">
  <TextInput />
</div>

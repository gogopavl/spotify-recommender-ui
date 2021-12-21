<script>
  import Heading from "../components/heading.svelte";
  import Playlist from "../components/playlist.svelte";
  import { playlists } from "../stores/playlists";

  const PAGE_NAME = "Playlists";
</script>

<svelte:head>
  <title>Spotify Playlist Recommender - {PAGE_NAME}</title>
</svelte:head>

<Heading heading={PAGE_NAME} />

<div class="p-4 grid gap-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-1">
  {#each $playlists as playlist}
    <Playlist {playlist} />
  {/each}
</div>

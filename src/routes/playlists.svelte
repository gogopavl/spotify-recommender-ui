<script>
  import { playlists } from "../stores/playlists";
  import Playlist from "../components/playlist.svelte";
</script>

<svelte:head>
  <title>Spotify Playlist Recommender - Playlists</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Playlists</h1>

<div class="p-4 grid gap-4 md:grid-cols-2 grid-cols-1">
  {#each $playlists as playlist}
    <Playlist {playlist} />
  {/each}
</div>

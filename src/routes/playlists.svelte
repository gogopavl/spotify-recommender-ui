<script>
  import { playlists } from "../stores/playlists";
</script>

<svelte:head>
  <title>Spotify Playlist Recommender - Playlists</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Playlists</h1>

{#each $playlists as playlist}
  <p>{playlist.name}</p>
  <img
    src={playlist.image}
    alt="{playlist.name} playlist cover"
    width="200px"
  />
{/each}

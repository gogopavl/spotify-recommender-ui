<script context="module">
  export async function load({ page }) {
    const url = "https://spotify-recommender.pvlrs.com/spotify-recommender/v1/playlists";
    const response = await fetch(url);
    const data = await response.json();
    const fetchedPlaylists = data.items.map((data, index) => {
      return {
        id: data.id,
        name: data.name,
        imageUrl: data.imageUrl,
        spotifyUrl: data.spotifyUrl,
      };
    });
    return { props: { playlists: fetchedPlaylists } };
  }
</script>

<script>
  import Heading from "../components/heading.svelte";
  import Playlist from "../components/playlist.svelte";

  const PAGE_NAME = "Playlists";

  export let playlists;
</script>

<svelte:head>
  <title>Moodify - {PAGE_NAME}</title>
</svelte:head>

<Heading heading={PAGE_NAME} />

<div
  class="p-4 grid gap-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 justify-items-center"
>
  {#each playlists as playlist}
    <Playlist {playlist} />
  {/each}
</div>

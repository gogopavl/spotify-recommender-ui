<script context="module">
  export async function load() {
    const url = `${environmentVariables.RECOMMENDER_BASE_PATH}/spotify-recommender/v1/playlists`;
    const response = await fetch(url);
    const data = await response.json();
    const fetchedPlaylists = data.items.map((data, index) => {
      return {
        id: data.id,
        name: data.name,
        emotions: data.emotions,
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
  import { environmentVariables } from "../environment/variables";

  const PAGE_NAME = "Playlists";

  export let playlists;
</script>

<svelte:head>
  <title>Moodify - {PAGE_NAME}</title>
</svelte:head>

<Heading heading={PAGE_NAME} />

<div
  class="max-w-5xl grid gap-8 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 justify-items-center mx-auto"
>
  {#each playlists as playlist}
    <Playlist {playlist} />
  {/each}
</div>

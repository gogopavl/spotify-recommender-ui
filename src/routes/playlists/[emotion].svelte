<script context="module">
  export async function load({ page }) {
    const emotion = page.params.emotion;
    const url = `https://spotify-recommender.pvlrs.com/spotify-recommender/v1/playlists/${emotion}`;
    const response = await fetch(url);
    const playlist = await response.json();
    return { props: { playlist } };
  }
</script>

<script>
  import Heading from "../../components/heading.svelte";
  import Playlist from "../../components/playlist.svelte";
  import { emotionAnalysisStore } from "../../stores/emotion-analysis";

  const PAGE_NAME = "Recommended Playlist";

  let emotionAnalysis;

  emotionAnalysisStore.subscribe((value) => {
    emotionAnalysis = value;
  });

  export let playlist;
</script>

<svelte:head>
  <title>Moodify - {PAGE_NAME}</title>
</svelte:head>

<Heading heading={PAGE_NAME} />

<p class="text-xl text-center my-8 lowercase">
  {emotionAnalysis.userMessage}
</p>

<div class="p-4 grid gap-4 grid-cols-1 justify-items-center">
  <Playlist {playlist} />
</div>

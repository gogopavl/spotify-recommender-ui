<script context="module">
  export async function load({ params }) {
    const emotion = params.emotion;
    const url = `${environmentVariables.RECOMMENDER_BASE_PATH}/spotify-recommender/v1/playlists/${emotion}`;
    const response = await fetch(url);
    const playlist = await response.json();
    return { props: { playlist } };
  }
</script>

<script>
  import EmotionModal from "../../components/emotion-modal.svelte";
  import Heading from "../../components/heading.svelte";
  import Playlist from "../../components/playlist.svelte";
  import { environmentVariables } from "../../environment/variables";
  import { emotionAnalysisStore } from "../../stores/emotion-analysis";

  const PAGE_NAME = "Recommended Playlist";

  let emotionModal;
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

<div class="min-h-[50vh]">
  <div
    class="mt-8 flex flex-row items-center justify-center justify-items-center"
  >
    <p class="text-xl text-center lowercase">
      {emotionAnalysis.userMessage}
    </p>

    <EmotionModal />
  </div>

  <div
    class="p-4 flex flex-row items-center justify-center justify-items-center"
  >
    <Playlist {playlist} />
  </div>
</div>

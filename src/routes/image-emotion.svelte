<script>
  import { goto } from "$app/navigation";
  import Heading from "../components/heading.svelte";
  import { environmentVariables } from "../environment/variables";
  import { emotionAnalysisStore } from "../stores/emotion-analysis";

  const PAGE_NAME = "Gimmimage";

  let avatar, fileinput;

  const onFileSelected = (e) => {
    let image = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = (e) => {
      avatar = e.target.result;
    };

    let rawDataReader = new FileReader();
    rawDataReader.onload = async function () {
      const url = `${environmentVariables.RECOMMENDER_BASE_PATH}/spotify-recommender/v1/analyses`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/octet-stream",
        },
        body: new Uint8Array(rawDataReader.result),
      });
      const emotionAnalysis = await response.json();
      emotionAnalysisStore.set(emotionAnalysis);

      goto(`/playlists/${emotionAnalysis.overallSentiment}`, {
        replaceState: false,
      });
    };
    rawDataReader.readAsArrayBuffer(image);
  };
</script>

<svelte:head>
  <title>Spotify Playlist Recommender - {PAGE_NAME}</title>
</svelte:head>

<Heading heading={PAGE_NAME} />

<div class="p-4 gap-4 grid grid-cols-1 justify-items-center max-w-xl mx-auto">
  {#if avatar}
    <img
      class="avatar avatar object-cover h-60 w-60 rounded-2xl"
      src={avatar}
      alt="User selection"
    />
  {:else}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-60 w-60"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  {/if}
  <div
    id="upload-button"
    class="grid justify-items-center"
    on:click={() => {
      fileinput.click();
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-12 w-12"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
      />
    </svg>
    <p>Choose Image</p>
  </div>
  <input
    style="display:none"
    type="file"
    accept=".jpg, .jpeg, .png"
    on:change={(e) => onFileSelected(e)}
    bind:this={fileinput}
  />
</div>

<style>
  #upload-button {
    cursor: pointer;
  }
</style>

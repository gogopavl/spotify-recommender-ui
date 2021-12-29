<script>
  import { clickOutside } from "../utilities/click-outside";
  import { emotionAnalysisStore } from "../stores/emotion-analysis";
  export let emotionAnalysis;
  let emotions = [];

  emotionAnalysisStore.subscribe((value) => {
    emotionAnalysis = value;
    Object.entries(value).forEach(([key, value]) => {
      if (value && key !== "userMessage") {
        emotions.push({ key: key, value: value });
      }
    });
  });

  let shouldDisplay = false;

  function handleClickOutside() {
    if (shouldDisplay) {
      shouldDisplay = false;
    }
  }

  function toggle() {
    shouldDisplay = !shouldDisplay;
  }
</script>

<div class="relative" use:clickOutside on:click_outside={handleClickOutside}>
  <button
    id="modal-button"
    class="m-2 p-1 rounded-full bg-slate-700 hover:bg-slate-600 shadow-sm h-8 w-8 flex items-center justify-center"
    on:click={toggle}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  </button>

  {#if shouldDisplay}
    <div
      id="emotion-modal"
      class="p-6 m-2 flex flex-col absolute right-[50%] z-10 items-center bg-black/[.85] max-w-xs text-slate-100 rounded-2xl min-w-max"
    >
      <h3 class="underline mb-2">Emotion Analysis</h3>
      {#each emotions as emotion}
        <p class="lowercase">{emotion.key}: {emotion.value}</p>
      {/each}
    </div>
  {/if}
</div>

<style>
  #emotion-modal {
    cursor: pointer;
  }
</style>

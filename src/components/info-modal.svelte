<script>
  import { clickOutside } from "../utilities/click-outside";

  export let slangText;
  export let helpText;

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
      id="info-modal"
      class="p-6 m-2 flex flex-col absolute right-[-0%] md:right-[-80%] z-10 items-center bg-black/[.85] text-slate-100 rounded-2xl text-center w-64 md:w-96"
    >
      <h3 class="underline">Slang Reference</h3>
      <p class="lowercase">{slangText}</p>
      <h3 class="underline mt-2">Help</h3>
      <p class="lowercase">{helpText}</p>
    </div>
  {/if}
</div>

<style>
  #info-modal {
    cursor: pointer;
  }
</style>

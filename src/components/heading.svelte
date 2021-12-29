<script>
  import InfoModal from "./info-modal.svelte";

  export let heading;
  export let slangText;
  export let helpText;
</script>

<div class="flex flex-row items-center justify-center justify-items-center">
  <h1 class="text-4xl text-center my-8 uppercase">{heading}</h1>
  {#if slangText || helpText}
    <InfoModal {slangText} {helpText} />
  {/if}
</div>

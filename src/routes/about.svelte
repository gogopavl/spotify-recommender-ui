<script>
  import EmotionTag from "../components/emotion-tag.svelte";
  import Heading from "../components/heading.svelte";
  import SubHeading from "../components/sub-heading.svelte";

  const PAGE_NAME = "About";
</script>

<svelte:head>
  <title>Moodify - {PAGE_NAME}</title>
</svelte:head>

<Heading heading={PAGE_NAME} />

<div
  class="min-h-[50vh] max-w-4xl flex flex-col items-center justify-center text-center mx-auto"
>
  <SubHeading subHeading="Emotion Tag Legend" />
  <div class="flex flex-col">
    <div
      class="flex flex-row justify-start justify-items-center items-center text-left"
    >
      <EmotionTag type="positive" />
      <p class="mx-2">positive - usually upbeat, cheerful music</p>
    </div>
    <div
      class="flex flex-row justify-start justify-items-center items-center text-left"
    >
      <EmotionTag type="negative" />
      <p class="mx-2">negative - intense music to channel your feelings</p>
    </div>
    <div
      class="flex flex-row justify-start justify-items-center items-center text-left"
    >
      <EmotionTag type="neutral" />
      <p class="mx-2">neutral - something in between</p>
    </div>
  </div>

  <SubHeading subHeading="Contributing" />
  <p class="max-w-[60%]">
    Interested in adding a playlist to the suggestions or contributing to
    <a href="https://moodify.pvlrs.com" target="blank" class="text-emerald-500"
      >moodify</a
    >? Reach out to me through
    <a href="https://pvlrs.com" target="blank" class="text-emerald-500"
      >pvlrs.com</a
    > and we'll work on it.
  </p>
</div>

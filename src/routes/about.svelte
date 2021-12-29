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

<div class="flex flex-col items-center">
  <SubHeading subHeading="Legend" />
  <div class="flex flex-col">
    <div class="flex flex-row place-items-center">
      <EmotionTag type="positive" />
      <p>positive</p>
    </div>
    <div class="flex flex-row place-items-center">
      <EmotionTag type="negative" />
      <p>negative</p>
    </div>
    <div class="flex flex-row place-items-center">
      <EmotionTag type="neutral" />
      <p>neutral</p>
    </div>
  </div>
</div>

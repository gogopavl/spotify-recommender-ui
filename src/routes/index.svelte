<script>
  import BigButton from "../components/big-button.svelte";
  import Heading from "../components/heading.svelte";

  const PAGE_NAME = "Gimmemotion";
</script>

<svelte:head>
  <title>Moodify - {PAGE_NAME}</title>
</svelte:head>

<Heading
  heading={PAGE_NAME}
  slangText="Gimmemotion = gimme (give me) + emotion"
  helpText="Express your emotions through text or a selfie; we'll analyze the sentiment associated with your input & recommended a spotify playlist"
/>

<div
  class="min-h-[50vh] max-w-4xl p-6 flex md:flex-row flex-col justify-center items-center justify-items-center mx-auto"
>
  <BigButton
    buttonLink="/text-emotion"
    buttonSvg="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
  />
  <BigButton
    buttonLink="/image-emotion"
    buttonSvg="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
  />
</div>

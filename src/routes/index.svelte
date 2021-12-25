<script>
  import BigButton from "../components/big-button.svelte";
  import Heading from "../components/heading.svelte";

  const PAGE_NAME = "Gimmemotion";
</script>

<svelte:head>
  <title>Moodify - {PAGE_NAME}</title>
</svelte:head>

<Heading heading={PAGE_NAME} />

<div
  class="p-4 gap-4 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-items-center max-w-xl mx-auto"
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

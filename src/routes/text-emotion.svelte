<script>
  import Heading from "../components/heading.svelte";
  import TextInput from "../components/text-input.svelte";

  const PAGE_NAME = "Gimmetext";
</script>

<svelte:head>
  <title>Moodify - {PAGE_NAME}</title>
</svelte:head>

<Heading
  heading={PAGE_NAME}
  slangText="Gimmetext = gimme (give me) + text"
  helpText="Type whatever comes to mind"
/>

<div
  class="min-h-[40vh] p-4 flex justify-items-center items-center justify-center max-w-4xl mx-auto"
>
  <TextInput />
</div>

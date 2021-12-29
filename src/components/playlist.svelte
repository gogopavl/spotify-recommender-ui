<script>
  import EmotionTag from "./emotion-tag.svelte";
  export let playlist;
</script>

<a
  class="p-6 h-[100%] bg-slate-700 text-slate-100 text-center rounded-xl shadow-sm hover:bg-slate-600 flex flex-col items-center"
  href={playlist.spotifyUrl}
  target="blank"
>
  <div class="bg-slate-700 hover:bg-slate-600 drop-shadow-xl">
    <img
      class="object-cover h-48 w-48 rounded-2xl"
      src={playlist.imageUrl}
      alt="{playlist.name} playlist cover"
    />
  </div>

  <p class="m-2 text-xl lowercase max-w-[80%]">{playlist.name}</p>

  <div class="flex flex-row">
    {#each playlist.emotions as emotion}
      <EmotionTag type={emotion} />
    {/each}
  </div>
</a>

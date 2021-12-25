<script>
  export let playlist;
</script>

<a
  class="p-6 bg-slate-700 text-slate-100 text-center rounded-md shadow-sm hover:bg-slate-600 flex flex-col items-center"
  href={`/playlists/${playlist.id}`}
>
  <div class="bg-slate-700 hover:bg-slate-600 drop-shadow-xl">
    <img
      class="object-cover h-48 w-48 rounded-2xl"
      src={playlist.imageUrl}
      alt="{playlist.name} playlist cover"
    />
  </div>

  <h2 class="text-2xl lowercase m-2">{playlist.name}</h2>
</a>

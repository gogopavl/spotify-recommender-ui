<script>
  export let playlist;
</script>

<a
  class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
  href={`/playlists/${playlist.id}`}
>
  <div class="bg-indigo-300 drop-shadow-xl">
    <img
      class="object-cover h-48 w-48 rounded-2xl"
      src={playlist.image}
      alt="{playlist.name} playlist cover"
      width="200px"
    />
  </div>

  <h2 class="text-2xl lowercase m-2">{playlist.name}</h2>
</a>

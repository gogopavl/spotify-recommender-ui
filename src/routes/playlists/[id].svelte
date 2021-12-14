<script context="module">
  export async function load({ page }) {
    const id = page.params.id;
    const url = `https://api.spotify.com/v1/users/bf4s7snymgeuagx1nk23ag0uc/playlists/${id}`;
    const response = await fetch(url, {
      headers: {
        Authorization:
          "Bearer BQDUMIU9nSr_xENCFhZ7D5pXvUl7aK8JSYs8W74tyHfemosLAkqlXohL04oqGCbaABSuzduVIbFylRKwG6FAeHvtThaEv3hwtkYchCsrRmL8VKFex-Gz8X41Q4sOAmCht88riU63YGBsBkFzVgR7qS_nTNS4j5BCy0SiRA",
      },
    });
    const playlist = await response.json();
    return { props: { playlist } };
  }
</script>

<script>
  export let playlist;
  const imageUrl = playlist.images[0]?.url;
</script>

<svelte:head>
  <title>Spotify Playlist Recommender - Playlist Details</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Details</h1>
<h1 class="text-4xl text-center my-8 lowercase">{playlist.name}</h1>

<a
  class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
  href={`/playlists/${playlist.id}`}
>
  <div class="bg-indigo-300 drop-shadow-xl">
    <img
      class="object-cover h-48 w-48 rounded-2xl"
      src={imageUrl}
      alt="{playlist.name} playlist cover"
      width="200px"
    />
  </div>

  <h2 class="text-2xl lowercase m-2">{playlist.name}</h2>
</a>

import { writable } from "svelte/store";

export const playlists = writable([]);

const fetchPlaylists = async () => {
  const url =
    "https://api.spotify.com/v1/users/bf4s7snymgeuagx1nk23ag0uc/playlists";
  const response = await fetch(url, {
    headers: {
      Authorization:
        "Bearer BQDUMIU9nSr_xENCFhZ7D5pXvUl7aK8JSYs8W74tyHfemosLAkqlXohL04oqGCbaABSuzduVIbFylRKwG6FAeHvtThaEv3hwtkYchCsrRmL8VKFex-Gz8X41Q4sOAmCht88riU63YGBsBkFzVgR7qS_nTNS4j5BCy0SiRA",
    },
  });
  const data = await response.json();
  const fetchedPlaylists = data.items.map((data, index) => {
    return {
      id: data.id,
      name: data.name,
      image: data.images[0]?.url,
    };
  });
  playlists.set(fetchedPlaylists);
};

fetchPlaylists();

import { writable } from "svelte/store";

export const playlists = writable([]);

const fetchPlaylists = async () => {
  const url =
    "https://api.spotify.com/v1/users/bf4s7snymgeuagx1nk23ag0uc/playlists";
  const response = await fetch(url, {
    headers: {
      Authorization:
        "Bearer BQC_I6WZUp5G2GT4SjitWFiZe_ZNzT8wK8VTddT-LRwiU_X308O2NRoVvwhHSzLu-xPHFx2MT-L8pyxlMceo8bWpnuLzXhtbJ-0Yibe40PPBwFO15U8uiAi45BBM7kzrLRZAKXjka7xmb670tnszW9_q5zrRZrsoIYFBeQ",
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
  debugger;
  playlists.set(fetchedPlaylists);
};

fetchPlaylists();

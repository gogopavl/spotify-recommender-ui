import { writable } from "svelte/store";

export const playlists = writable([]);

const fetchPlaylists = async () => {
  const url =
    "http://localhost:8080/spotify-recommender/v1/users/bf4s7snymgeuagx1nk23ag0uc/playlists";
  const response = await fetch(url);
  const data = await response.json();
  const fetchedPlaylists = data.items.map((data, index) => {
    return {
      id: data.id,
      name: data.name,
      image: data.imageUrl,
    };
  });
  playlists.set(fetchedPlaylists);
};

fetchPlaylists();

import { c as create_ssr_component, e as escape, a as add_attribute } from "./app-efbe28c6.js";
import "@sveltejs/kit/ssr";
async function load({ page }) {
  const id = page.params.id;
  const url = `https://api.spotify.com/v1/users/bf4s7snymgeuagx1nk23ag0uc/playlists/${id}`;
  const response = await fetch(url, {
    headers: {
      Authorization: "Bearer BQB59HZ7kBCrGBAK8J93sf9dKlk-JRdNgezUKisafE0v7epXbVOt6TS6KcHVZy3CSd5FNM_b_Dypy86pqiJdzYI8eH6SmjkTX7luj8QCMvwr-3u-SMJL1Hr3fcM-VCxMoEsvqU9hjc0T7uZ3eg5CcCyWrmJjMDNZpY20-3kDY0I"
    }
  });
  const playlist = await response.json();
  return { props: { playlist } };
}
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { playlist } = $$props;
  const imageUrl = playlist.images[0]?.url;
  if ($$props.playlist === void 0 && $$bindings.playlist && playlist !== void 0)
    $$bindings.playlist(playlist);
  return `${$$result.head += `${$$result.title = `<title>Spotify Playlist Recommender - Playlist Details</title>`, ""}`, ""}

<h1 class="${"text-4xl text-center my-8 uppercase"}">Details</h1>
<h1 class="${"text-4xl text-center my-8 lowercase"}">${escape(playlist.name)}</h1>

<a class="${"p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"}"${add_attribute("href", `/playlists/${playlist.id}`, 0)}><div class="${"bg-indigo-300 drop-shadow-xl"}"><img class="${"object-cover h-48 w-48 rounded-2xl"}"${add_attribute("src", imageUrl, 0)} alt="${escape(playlist.name) + " playlist cover"}" width="${"200px"}"></div>

  <h2 class="${"text-2xl lowercase m-2"}">${escape(playlist.name)}</h2></a>`;
});
export { U5Bidu5D as default, load };

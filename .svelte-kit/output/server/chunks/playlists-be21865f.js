import { c as create_ssr_component, a as add_attribute, e as escape, n as noop, s as safe_not_equal, b as subscribe, v as validate_component, d as each } from "./app-efbe28c6.js";
import { H as Heading } from "./heading-2673d0be.js";
import "@sveltejs/kit/ssr";
const Playlist = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { playlist } = $$props;
  if ($$props.playlist === void 0 && $$bindings.playlist && playlist !== void 0)
    $$bindings.playlist(playlist);
  return `<a class="${"p-6 bg-slate-700 text-slate-100 text-center rounded-md shadow-sm hover:bg-slate-600 flex flex-col items-center"}"${add_attribute("href", `/playlists/${playlist.id}`, 0)}><div class="${"bg-slate-700 hover:bg-slate-600 drop-shadow-xl"}"><img class="${"object-cover h-48 w-48 rounded-2xl"}"${add_attribute("src", playlist.image, 0)} alt="${escape(playlist.name) + " playlist cover"}"></div>

  <h2 class="${"text-2xl lowercase m-2"}">${escape(playlist.name)}</h2></a>`;
});
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
const playlists = writable([]);
const fetchPlaylists = async () => {
  const url = "http://localhost:8080/spotify-recommender/v1/users/bf4s7snymgeuagx1nk23ag0uc/playlists";
  const response = await fetch(url);
  const data = await response.json();
  const fetchedPlaylists = data.items.map((data2, index) => {
    return {
      id: data2.id,
      name: data2.name,
      image: data2.imageUrl
    };
  });
  playlists.set(fetchedPlaylists);
};
fetchPlaylists();
const PAGE_NAME = "Playlists";
const Playlists = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $playlists, $$unsubscribe_playlists;
  $$unsubscribe_playlists = subscribe(playlists, (value) => $playlists = value);
  $$unsubscribe_playlists();
  return `${$$result.head += `${$$result.title = `<title>Spotify Playlist Recommender - ${escape(PAGE_NAME)}</title>`, ""}`, ""}

${validate_component(Heading, "Heading").$$render($$result, { heading: PAGE_NAME }, {}, {})}

<div class="${"p-4 grid gap-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-1"}">${each($playlists, (playlist) => `${validate_component(Playlist, "Playlist").$$render($$result, { playlist }, {}, {})}`)}</div>`;
});
export { Playlists as default };

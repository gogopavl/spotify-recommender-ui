import { c as create_ssr_component, e as escape, v as validate_component } from "./app-efbe28c6.js";
import { H as Heading } from "./heading-2673d0be.js";
import "@sveltejs/kit/ssr";
var imageEmotion_svelte_svelte_type_style_lang = "";
const css = {
  code: "#upload-button.svelte-ctkggw{cursor:pointer}",
  map: null
};
const PAGE_NAME = "Gimmimage";
const Image_emotion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Spotify Playlist Recommender - ${escape(PAGE_NAME)}</title>`, ""}`, ""}

${validate_component(Heading, "Heading").$$render($$result, { heading: PAGE_NAME }, {}, {})}

<div class="${"p-4 gap-4 grid grid-cols-1 justify-items-center max-w-xl mx-auto"}">${`<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-60 w-60"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"}"></path></svg>`}
  <div id="${"upload-button"}" class="${"grid justify-items-center svelte-ctkggw"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-12 w-12"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"}"></path></svg>
    <p>Choose Image</p></div>
  <input style="${"display:none"}" type="${"file"}" accept="${".jpg, .jpeg, .png"}">
</div>`;
});
export { Image_emotion as default };

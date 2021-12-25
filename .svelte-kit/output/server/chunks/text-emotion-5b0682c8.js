import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from "./app-efbe28c6.js";
import { H as Heading } from "./heading-2673d0be.js";
import "@sveltejs/kit/ssr";
const Text_input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inputText;
  inputText = "";
  return `<div class="${"flex"}"><input id="${"text-input"}" class="${"p-2 text-slate-700 rounded-lg"}" type="${"text"}" placeholder="${"Start typing..."}" name="${"given-text"}"${add_attribute("value", inputText, 0)}>
  <button id="${"text-submit"}" type="${"submit"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"mx-2 h-10 w-10"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg></button>
</div>`;
});
const PAGE_NAME = "Gimmetext";
const Text_emotion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Spotify Playlist Recommender - ${escape(PAGE_NAME)}</title>`, ""}`, ""}

${validate_component(Heading, "Heading").$$render($$result, { heading: PAGE_NAME }, {}, {})}

<div class="${"p-4 gap-4 grid grid-cols-1 justify-items-center max-w-xl mx-auto"}">${validate_component(Text_input, "TextInput").$$render($$result, {}, {}, {})}</div>`;
});
export { Text_emotion as default };

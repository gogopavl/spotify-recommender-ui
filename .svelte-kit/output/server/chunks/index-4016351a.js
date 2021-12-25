import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from "./app-efbe28c6.js";
import { H as Heading } from "./heading-2673d0be.js";
import "@sveltejs/kit/ssr";
const Big_button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { buttonLink = "/" } = $$props;
  let { buttonSvg = "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" } = $$props;
  if ($$props.buttonLink === void 0 && $$bindings.buttonLink && buttonLink !== void 0)
    $$bindings.buttonLink(buttonLink);
  if ($$props.buttonSvg === void 0 && $$bindings.buttonSvg && buttonSvg !== void 0)
    $$bindings.buttonSvg(buttonSvg);
  return `<button class="${"big-button m-4 text-slate-50 bg-emerald-500 hover:bg-emerald-400 rounded-full h-60 w-60"}"><a${add_attribute("href", buttonLink, 0)}><svg class="${"h-20 w-20 m-auto"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}"${add_attribute("d", buttonSvg, 0)}></path></svg></a></button>`;
});
const PAGE_NAME = "Gimmemotion";
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Spotify Playlist Recommender - ${escape(PAGE_NAME)}</title>`, ""}`, ""}

${validate_component(Heading, "Heading").$$render($$result, { heading: PAGE_NAME }, {}, {})}

<div class="${"p-4 gap-4 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-items-center max-w-xl mx-auto"}">${validate_component(Big_button, "BigButton").$$render($$result, {
    buttonLink: "/text-emotion",
    buttonSvg: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
  }, {}, {})}
  ${validate_component(Big_button, "BigButton").$$render($$result, {
    buttonLink: "/image-emotion",
    buttonSvg: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
  }, {}, {})}</div>`;
});
export { Routes as default };

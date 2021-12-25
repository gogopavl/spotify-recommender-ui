import { c as create_ssr_component, v as validate_component } from "./app-efbe28c6.js";
import "@sveltejs/kit/ssr";
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"flex justify-center w-full"}"><a class="${"mx-4 text-lg"}" href="${"/"}">Home</a>
  <a class="${"mx-4 text-lg"}" href="${"/playlists"}">Playlists</a>
  <a class="${"mx-4 text-lg"}" href="${"/about"}">About</a></nav>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Sulphur+Point&display=swap");@tailwind base;@tailwind components;@tailwind utilities;body{font-family:"Sulphur Point", -apple-system, BlinkMacSystemFont, "Segoe UI",\n      Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;color:white;background-color:#1e293b}',
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"p-8 max-w-6xl mx-auto"}">${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
  ${slots.default ? slots.default({}) : ``}
</div>`;
});
export { _layout as default };

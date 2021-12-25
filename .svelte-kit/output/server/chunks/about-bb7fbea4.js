import { c as create_ssr_component, e as escape, v as validate_component } from "./app-efbe28c6.js";
import { H as Heading } from "./heading-2673d0be.js";
import "@sveltejs/kit/ssr";
const PAGE_NAME = "About";
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Spotify Playlist Recommender - ${escape(PAGE_NAME)}</title>`, ""}`, ""}

${validate_component(Heading, "Heading").$$render($$result, { heading: PAGE_NAME }, {}, {})}`;
});
export { About as default };

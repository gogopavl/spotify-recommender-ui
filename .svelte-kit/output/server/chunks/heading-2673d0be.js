import { c as create_ssr_component, e as escape } from "./app-efbe28c6.js";
const Heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { heading } = $$props;
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  return `<h1 class="${"text-4xl text-center my-8 uppercase"}">${escape(heading)}</h1>`;
});
export { Heading as H };

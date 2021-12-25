import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths, assets } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta name=\"description\" content=\"\" />\n    <link rel=\"icon\" href=\"/favicon.png\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n    " + head + "\n  </head>\n\n  <body>\n    <div id=\"svelte\">" + body + "</div>\n  </body>\n</html>\n";

let options = null;

const default_settings = { paths: {"base":"","assets":""} };

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings = default_settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	const hooks = get_hooks(user_hooks);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: assets + "/_app/start-334a15f8.js",
			css: [assets + "/_app/assets/start-d5b4de3e.css"],
			js: [assets + "/_app/start-334a15f8.js",assets + "/_app/chunks/vendor-73c04143.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => assets + "/_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: (error, request) => {
			hooks.handleError({ error, request });
			error.stack = options.get_stack(error);
		},
		hooks,
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		prerender: true,
		read: settings.read,
		root,
		service_worker: null,
		router: true,
		ssr: true,
		target: "#svelte",
		template,
		trailing_slash: "never"
	};
}

// input has already been decoded by decodeURI
// now handle the rest that decodeURIComponent would do
const d = s => s
	.replace(/%23/g, '#')
	.replace(/%3[Bb]/g, ';')
	.replace(/%2[Cc]/g, ',')
	.replace(/%2[Ff]/g, '/')
	.replace(/%3[Ff]/g, '?')
	.replace(/%3[Aa]/g, ':')
	.replace(/%40/g, '@')
	.replace(/%26/g, '&')
	.replace(/%3[Dd]/g, '=')
	.replace(/%2[Bb]/g, '+')
	.replace(/%24/g, '$');

const empty = () => ({});

const manifest = {
	assets: [{"file":"favicon.png","size":1571,"type":"image/png"}],
	layout: "src/routes/__layout.svelte",
	error: ".svelte-kit/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/image-emotion\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/image-emotion.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/text-emotion\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/text-emotion.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/playlists\/([^/]+?)\/?$/,
						params: (m) => ({ id: d(m[1])}),
						a: ["src/routes/__layout.svelte", "src/routes/playlists/[id].svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/playlists\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/playlists.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/about\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/about.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, resolve }) => resolve(request)),
	handleError: hooks.handleError || (({ error }) => console.error(error.stack)),
	externalFetch: hooks.externalFetch || fetch
});

const module_lookup = {
	"src/routes/__layout.svelte": () => import("../../src/routes/__layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components/error.svelte"),"src/routes/index.svelte": () => import("../../src/routes/index.svelte"),"src/routes/image-emotion.svelte": () => import("../../src/routes/image-emotion.svelte"),"src/routes/text-emotion.svelte": () => import("../../src/routes/text-emotion.svelte"),"src/routes/playlists/[id].svelte": () => import("../../src/routes/playlists/[id].svelte"),"src/routes/playlists.svelte": () => import("../../src/routes/playlists.svelte"),"src/routes/about.svelte": () => import("../../src/routes/about.svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"pages/__layout.svelte-963210e8.js","css":["assets/pages/__layout.svelte-36b78f93.css"],"js":["pages/__layout.svelte-963210e8.js","chunks/vendor-73c04143.js"],"styles":[]},".svelte-kit/build/components/error.svelte":{"entry":"error.svelte-0e83e880.js","css":[],"js":["error.svelte-0e83e880.js","chunks/vendor-73c04143.js"],"styles":[]},"src/routes/index.svelte":{"entry":"pages/index.svelte-fc2f64d6.js","css":[],"js":["pages/index.svelte-fc2f64d6.js","chunks/vendor-73c04143.js","chunks/heading-4038fcdd.js"],"styles":[]},"src/routes/image-emotion.svelte":{"entry":"pages/image-emotion.svelte-86079a46.js","css":["assets/pages/image-emotion.svelte-00dd8e91.css"],"js":["pages/image-emotion.svelte-86079a46.js","chunks/vendor-73c04143.js","chunks/heading-4038fcdd.js"],"styles":[]},"src/routes/text-emotion.svelte":{"entry":"pages/text-emotion.svelte-e26fc2e0.js","css":[],"js":["pages/text-emotion.svelte-e26fc2e0.js","chunks/vendor-73c04143.js","chunks/heading-4038fcdd.js"],"styles":[]},"src/routes/playlists/[id].svelte":{"entry":"pages/playlists/_id_.svelte-749c1624.js","css":[],"js":["pages/playlists/_id_.svelte-749c1624.js","chunks/vendor-73c04143.js"],"styles":[]},"src/routes/playlists.svelte":{"entry":"pages/playlists.svelte-df5f7c4c.js","css":[],"js":["pages/playlists.svelte-df5f7c4c.js","chunks/vendor-73c04143.js","chunks/heading-4038fcdd.js"],"styles":[]},"src/routes/about.svelte":{"entry":"pages/about.svelte-82b8b37a.js","css":[],"js":["pages/about.svelte-82b8b37a.js","chunks/vendor-73c04143.js","chunks/heading-4038fcdd.js"],"styles":[]}};

async function load_component(file) {
	const { entry, css, js, styles } = metadata_lookup[file];
	return {
		module: await module_lookup[file](),
		entry: assets + "/_app/" + entry,
		css: css.map(dep => assets + "/_app/" + dep),
		js: js.map(dep => assets + "/_app/" + dep),
		styles
	};
}

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}
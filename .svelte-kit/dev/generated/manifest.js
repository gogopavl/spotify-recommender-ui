const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/image-emotion.svelte"),
	() => import("../../../src/routes/text-emotion.svelte"),
	() => import("../../../src/routes/playlists/[id].svelte"),
	() => import("../../../src/routes/playlists.svelte"),
	() => import("../../../src/routes/about.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/image-emotion.svelte
	[/^\/image-emotion\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/text-emotion.svelte
	[/^\/text-emotion\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/playlists/[id].svelte
	[/^\/playlists\/([^/]+?)\/?$/, [c[0], c[5]], [c[1]], (m) => ({ id: d(m[1])})],

	// src/routes/playlists.svelte
	[/^\/playlists\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/about.svelte
	[/^\/about\/?$/, [c[0], c[7]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];
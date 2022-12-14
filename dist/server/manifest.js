const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg","icon.png","logo.riv"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-04ea3a59.js","imports":["_app/immutable/start-04ea3a59.js","_app/immutable/chunks/index-1a8d1abb.js","_app/immutable/chunks/singletons-ae832ef8.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-220eff25.js'),
			() => import('./chunks/1-962e1fec.js'),
			() => import('./chunks/2-3a473950.js'),
			() => import('./chunks/3-105b55ae.js'),
			() => import('./chunks/4-c6649cb2.js'),
			() => import('./chunks/5-89fa9c59.js'),
			() => import('./chunks/6-658a59c8.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/forms",
				pattern: /^\/api\/forms\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-59bc1693.js')
			},
			{
				id: "/api/forms/[key]",
				pattern: /^\/api\/forms\/([^/]+?)\/?$/,
				params: [{"name":"key","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: () => import('./chunks/_server.ts-dd45f2eb.js')
			},
			{
				id: "/api/publications",
				pattern: /^\/api\/publications\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-4ed993c7.js')
			},
			{
				id: "/editor/[key]",
				pattern: /^\/editor\/([^/]+?)\/?$/,
				params: [{"name":"key","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/f/[slug]",
				pattern: /^\/f\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/preview/[key]",
				pattern: /^\/preview\/([^/]+?)\/?$/,
				params: [{"name":"key","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map

import './database-0f0c5388.js';
import 'deta';

const load = async ({ fetch }) => {
  const req = await fetch("/api/forms");
  const data = await req.json();
  return { forms: data.forms };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
const component = async () => (await import('./_page.svelte-e00fb0bc.js')).default;
const file = '_app/immutable/components/pages/_page.svelte-087598d3.js';
const imports = ["_app/immutable/components/pages/_page.svelte-087598d3.js","_app/immutable/chunks/index-1a8d1abb.js","_app/immutable/chunks/Label-59fdd747.js","_app/immutable/chunks/editor-644a48cf.js","_app/immutable/chunks/singletons-ae832ef8.js"];
const stylesheets = ["_app/immutable/assets/_page-000214b0.css","_app/immutable/assets/Label-80150fc4.css","_app/immutable/assets/editor-758664bd.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, stylesheets };
//# sourceMappingURL=3-105b55ae.js.map

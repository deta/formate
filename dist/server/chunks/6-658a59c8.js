import { e as error } from './index2-bebb4fa4.js';
import { d as db } from './database-0f0c5388.js';
import 'deta';

const load = async ({ params }) => {
  const key = params.key;
  const data = await db.forms.get(key);
  if (!data)
    throw error(404, "Not found");
  return data;
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 6;
const component = async () => (await import('./_page.svelte-d9a6f6c2.js')).default;
const file = '_app/immutable/components/pages/preview/_key_/_page.svelte-1e1be145.js';
const imports = ["_app/immutable/components/pages/preview/_key_/_page.svelte-1e1be145.js","_app/immutable/chunks/index-1a8d1abb.js","_app/immutable/chunks/Renderer-e141bfd1.js","_app/immutable/chunks/Label-59fdd747.js"];
const stylesheets = ["_app/immutable/assets/_page-ff001ff6.css","_app/immutable/assets/Renderer-8d52f86c.css","_app/immutable/assets/Label-80150fc4.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, stylesheets };
//# sourceMappingURL=6-658a59c8.js.map

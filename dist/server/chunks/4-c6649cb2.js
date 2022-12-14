import { d as db } from './database-0f0c5388.js';
import 'deta';

const load = async ({ params }) => {
  const form = await db.forms.get(params.key);
  return { form };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
const component = async () => (await import('./_page.svelte-d4bec8da.js')).default;
const file = '_app/immutable/components/pages/editor/_key_/_page.svelte-9b831e47.js';
const imports = ["_app/immutable/components/pages/editor/_key_/_page.svelte-9b831e47.js","_app/immutable/chunks/index-1a8d1abb.js","_app/immutable/chunks/Label-59fdd747.js","_app/immutable/chunks/editor-644a48cf.js","_app/immutable/chunks/singletons-ae832ef8.js"];
const stylesheets = ["_app/immutable/assets/_page-bd86b492.css","_app/immutable/assets/Label-80150fc4.css","_app/immutable/assets/editor-758664bd.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, stylesheets };
//# sourceMappingURL=4-c6649cb2.js.map

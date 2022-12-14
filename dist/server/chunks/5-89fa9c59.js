import { e as error } from './index2-bebb4fa4.js';
import { d as db } from './database-0f0c5388.js';
import 'deta';

const load = async ({ params }) => {
  const slug = params.slug;
  const data = await db.forms.fetch({ slug });
  if (data.items.length === 0)
    throw error(404, "Not found");
  return data.items[0];
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
const component = async () => (await import('./_page.svelte-6ee852d1.js')).default;
const file = '_app/immutable/components/pages/f/_slug_/_page.svelte-15bfe3bd.js';
const imports = ["_app/immutable/components/pages/f/_slug_/_page.svelte-15bfe3bd.js","_app/immutable/chunks/index-1a8d1abb.js","_app/immutable/chunks/Renderer-e141bfd1.js","_app/immutable/chunks/Label-59fdd747.js"];
const stylesheets = ["_app/immutable/assets/Renderer-8d52f86c.css","_app/immutable/assets/Label-80150fc4.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, stylesheets };
//# sourceMappingURL=5-89fa9c59.js.map

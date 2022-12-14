import { c as create_ssr_component, v as validate_component } from './index-1d30136c.js';
import { R as Renderer } from './Renderer-a27aeddb.js';

const css = {
  code: ".preview.svelte-gfmh35{position:absolute;top:1rem;left:1rem;font-size:0.75rem;opacity:0.3}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let inputs = {};
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"preview svelte-gfmh35"}"><span>Preview Mode (data won&#39;t be sent)</span></div>

${validate_component(Renderer, "Renderer").$$render(
      $$result,
      { form: data, inputs },
      {
        inputs: ($$value) => {
          inputs = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-d9a6f6c2.js.map

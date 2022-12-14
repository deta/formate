import { c as create_ssr_component, v as validate_component } from './index-1d30136c.js';
import { R as Renderer } from './Renderer-a27aeddb.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let inputs = {};
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Renderer, "Renderer").$$render(
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
//# sourceMappingURL=_page.svelte-6ee852d1.js.map

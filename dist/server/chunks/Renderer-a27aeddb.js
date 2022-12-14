import { c as create_ssr_component, l as createEventDispatcher, e as escape } from './index-1d30136c.js';

const css = {
  code: "h2.svelte-1os88ue.svelte-1os88ue,p.svelte-1os88ue.svelte-1os88ue,a.svelte-1os88ue.svelte-1os88ue{all:unset}h2.svelte-1os88ue.svelte-1os88ue{font-weight:600;font-size:2.5rem;line-height:3rem}p.svelte-1os88ue.svelte-1os88ue{font-size:1rem;line-height:1.5rem;font-weight:300}a.svelte-1os88ue.svelte-1os88ue{color:var(--accent);font-weight:600;cursor:pointer}a.svelte-1os88ue.svelte-1os88ue:hover{text-underline-offset:0.25rem;text-decoration:underline}.wrapper.svelte-1os88ue.svelte-1os88ue{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;min-height:50vh;padding:2rem}.form.svelte-1os88ue.svelte-1os88ue{color:#636363;position:relative;display:flex;flex-direction:column;gap:3rem;padding:3rem;padding-bottom:4rem;width:100%;max-width:40rem;border-radius:1rem;background-color:white}.fields.svelte-1os88ue.svelte-1os88ue{display:flex;flex-direction:column;gap:2rem}.heading.svelte-1os88ue.svelte-1os88ue{gap:1rem;display:flex;flex-direction:column}.finished.svelte-1os88ue.svelte-1os88ue{text-align:center}.icon.svelte-1os88ue.svelte-1os88ue{font-size:6rem}.finished.svelte-1os88ue h3.svelte-1os88ue{all:unset;display:block;font-weight:bold;font-size:6rem}.finished.svelte-1os88ue p.svelte-1os88ue{all:unset;display:block;font-size:1rem;font-weight:300}.card.svelte-1os88ue.svelte-1os88ue{padding:4rem;border-radius:1rem;background-color:white}.preview.svelte-1os88ue.svelte-1os88ue{position:fixed;top:1rem;right:1rem}.info.svelte-1os88ue.svelte-1os88ue{display:flex;gap:0.25rem;text-align:center;font-style:italic;font-size:0.75rem;font-weight:300;margin-top:1rem;border:2px solid;border-radius:0.5rem;padding:1rem 1.25rem;box-shadow:0 0 1rem -0.2rem var(--neutral);border-color:var(--accent)}.info.svelte-1os88ue>.svelte-1os88ue{display:block}",
  map: null
};
const Renderer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { form } = $$props;
  let { inputs = {} } = $$props;
  let { finished = form.screens.length === 0 } = $$props;
  let currentScreenIndex = 0;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.inputs === void 0 && $$bindings.inputs && inputs !== void 0)
    $$bindings.inputs(inputs);
  if ($$props.finished === void 0 && $$bindings.finished && finished !== void 0)
    $$bindings.finished(finished);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    form?.screens?.[currentScreenIndex];
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-r7ru1d_START -->${$$result.title = `<title>${escape(form.name)}</title>`, ""}<!-- HEAD_svelte-r7ru1d_END -->`, ""}

<div class="${"wrapper " + escape(form.color, true) + " svelte-1os88ue"}">${``}
</div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Renderer as R };
//# sourceMappingURL=Renderer-a27aeddb.js.map

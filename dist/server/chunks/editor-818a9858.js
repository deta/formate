import { c as create_ssr_component, e as escape, d as each, h as add_attribute, v as validate_component, m as missing_component, j as get_store_value } from './index-1d30136c.js';
import { d as derived, w as writable } from './index3-7ad95f4d.js';

const css$4 = {
  code: "button.svelte-aeg0gf{all:unset}button.svelte-aeg0gf{position:relative;cursor:pointer;gap:0.5rem;width:fit-content;display:flex;flex-direction:row;align-items:center;justify-content:center;user-select:none;white-space:nowrap;color:white;text-align:center;font-weight:600;font-size:1rem;line-height:1rem;border-radius:0.5rem;padding:1rem 1.25rem;background-color:var(--accent);transition:0.1s ease}button.svelte-aeg0gf:hover{filter:brightness(1.05)}button.svelte-aeg0gf:active{transform:translateY(2px)}button.svelte-aeg0gf svg{display:block;width:1rem;height:1rem;transform:scale(1.25)}.normal.svelte-aeg0gf{color:white;background-color:var(--accent)}.neutral.svelte-aeg0gf{color:var(--accent);background-color:var(--neutral)}.danger.svelte-aeg0gf{color:white;background-color:var(--danger)}.neutral.svelte-aeg0gf svg *{stroke:var(--accent)}.danger.svelte-aeg0gf svg *,.normal.svelte-aeg0gf svg *{stroke:white}.fullWidth.svelte-aeg0gf{width:100%;padding-left:0;padding-right:0}.disabled.svelte-aeg0gf{pointer-events:none;opacity:0.5}.small.svelte-aeg0gf{padding:0.75rem 1.25rem}.centered.svelte-aeg0gf{margin:0 auto}.left.svelte-aeg0gf{margin-right:auto}.right.svelte-aeg0gf{margin-left:auto}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style = "normal" } = $$props;
  let { fullWidth = false } = $$props;
  let { small = false } = $$props;
  let { disabled = false } = $$props;
  let { position = "auto" } = $$props;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.fullWidth === void 0 && $$bindings.fullWidth && fullWidth !== void 0)
    $$bindings.fullWidth(fullWidth);
  if ($$props.small === void 0 && $$bindings.small && small !== void 0)
    $$bindings.small(small);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  $$result.css.add(css$4);
  return `<button class="${[
    escape(style, true) + " " + escape(position, true) + " svelte-aeg0gf",
    (small ? "small" : "") + " " + (fullWidth ? "fullWidth" : "") + " " + (disabled ? "disabled" : "")
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}
</button>`;
});
const TrashBin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"22"}" height="${"22"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M4 7H20"}" stroke="${"black"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M10 11V17"}" stroke="${"black"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M14 11V17"}" stroke="${"black"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M5 7L6 19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19L19 7"}" stroke="${"black"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M9 7V4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V7"}" stroke="${"black"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>`;
});
const openedModal = writable(null);
function createSlug(value) {
  return value.toLowerCase().trim().split(/\s+/g).join("-");
}
function HeadlessForm(initial, validators) {
  const values = writable({ ...initial });
  const errors = writable({});
  const hasErrors = derived(errors, (errors2) => Object.keys(errors2).length > 0);
  const resetValues = () => {
    values.set({ ...initial });
  };
  const resetErrors = () => {
    errors.set({});
  };
  const resetKeyError = (key) => {
    errors.update((oldValues) => {
      const newValues = { ...oldValues };
      delete newValues[key];
      return newValues;
    });
  };
  const validate = () => {
    errors.set({});
    const target = get_store_value(values);
    for (const key in target) {
      if (typeof validators[key] === "function") {
        try {
          validators[key](target[key]);
        } catch (error) {
          errors.update((old) => ({ ...old, [key]: error.message }));
        }
      }
    }
  };
  return { values, errors, hasErrors, resetValues, resetErrors, resetKeyError, validate };
}
const css$3 = {
  code: ".wrapper.svelte-zp8cfi{z-index:9999;position:fixed;overflow:hidden;top:0;left:0;width:100%;height:100vh;padding:1rem;display:flex;align-items:center;justify-content:center}.modal.svelte-zp8cfi{position:relative;display:flex;flex-direction:column;height:fit-content;overflow:hidden;max-height:100%;z-index:999999;width:100%;min-height:200px;max-width:600px;border-radius:1rem;background-color:white}.overlay.svelte-zp8cfi{position:fixed;top:0;left:0;z-index:9999;cursor:pointer;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.3)}.tabs.svelte-zp8cfi{display:flex;gap:1rem;width:100%;padding:0 2.5rem;background-color:var(--neutral)}.tab.svelte-zp8cfi{all:unset;opacity:0.5;cursor:pointer;color:var(--accent);padding-bottom:0.5rem;font-size:0.9rem;font-weight:400;text-transform:capitalize}.content.svelte-zp8cfi{display:flex;flex-direction:column;width:100%;height:100%;overflow-x:hidden;overflow-y:auto;gap:2rem}.tab.svelte-zp8cfi:hover,.tab.active.svelte-zp8cfi{opacity:1}.paddings.svelte-zp8cfi{padding:2rem 2.5rem}h2.svelte-zp8cfi{margin:0;padding:2rem 2.5rem;padding-bottom:1.5rem;font-weight:700;font-size:1.5rem;color:var(--accent);background-color:var(--neutral)}",
  map: null
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { paddings = true } = $$props;
  let { tabs = [] } = $$props;
  let { currentTab = tabs?.[0] || "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.paddings === void 0 && $$bindings.paddings && paddings !== void 0)
    $$bindings.paddings(paddings);
  if ($$props.tabs === void 0 && $$bindings.tabs && tabs !== void 0)
    $$bindings.tabs(tabs);
  if ($$props.currentTab === void 0 && $$bindings.currentTab && currentTab !== void 0)
    $$bindings.currentTab(currentTab);
  $$result.css.add(css$3);
  return `<div class="${"wrapper svelte-zp8cfi"}"><div class="${"modal svelte-zp8cfi"}"><h2 class="${"svelte-zp8cfi"}">${escape(title)}</h2>
		<div class="${"tabs svelte-zp8cfi"}">${each(tabs, (tab) => {
    return `<button class="${["tab svelte-zp8cfi", currentTab === tab ? "active" : ""].join(" ").trim()}">${escape(tab)}</button>`;
  })}</div>
		<div class="${["content svelte-zp8cfi", paddings ? "paddings" : ""].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</div></div>

	
	<div class="${"overlay svelte-zp8cfi"}"></div>
</div>`;
});
const css$2 = {
  code: ".input-wrapper.svelte-rktlwj.svelte-rktlwj{display:flex;flex-direction:row;border:1px solid;border-radius:0.5rem;border-color:var(--border);padding:0 1.25rem;overflow-x:auto;overflow-y:hidden;transition:border-color 0.1s ease}.input-wrapper.svelte-rktlwj.svelte-rktlwj:focus-within{border-color:var(--accent)}.input-wrapper.disabled.svelte-rktlwj.svelte-rktlwj{opacity:0.5;user-select:none}.input-wrapper.error.svelte-rktlwj.svelte-rktlwj{border-color:var(--danger)}.input-wrapper.error.svelte-rktlwj .prefix.svelte-rktlwj{color:var(--danger)}input.svelte-rktlwj.svelte-rktlwj::placeholder{opacity:0.5}input.svelte-rktlwj.svelte-rktlwj,.prefix.svelte-rktlwj.svelte-rktlwj,.icon.svelte-rktlwj.svelte-rktlwj{all:unset;font-size:1rem;line-height:1.5rem;padding:1rem 0}input.svelte-rktlwj.svelte-rktlwj{width:100%}.prefix.svelte-rktlwj.svelte-rktlwj,.icon.svelte-rktlwj.svelte-rktlwj{opacity:0.3;user-select:none;min-width:fit-content}.icon.svelte-rktlwj.svelte-rktlwj{margin-left:0.25rem}.icon.svelte-rktlwj svg{display:block}.error-message.svelte-rktlwj.svelte-rktlwj{color:var(--danger);padding:0 1rem;margin-top:0.5rem;font-size:0.75rem;font-weight:300}",
  map: null
};
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value = "" } = $$props;
  let { disabled = false } = $$props;
  let { error = false } = $$props;
  let { type = "text" } = $$props;
  let { prefix = void 0 } = $$props;
  let { icon = void 0 } = $$props;
  let { placeholder = "" } = $$props;
  let inputElemenet;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0)
    $$bindings.prefix(prefix);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  $$result.css.add(css$2);
  return `<div><div class="${[
    "input-wrapper svelte-rktlwj",
    (disabled ? "disabled" : "") + " " + (error ? "error" : "")
  ].join(" ").trim()}">
		${prefix ? `<span class="${"prefix svelte-rktlwj"}">${escape(prefix)}</span>` : ``}

		<input${add_attribute("placeholder", placeholder, 0)}${add_attribute("type", type, 0)}${add_attribute("value", value, 0)} class="${"svelte-rktlwj"}"${add_attribute("this", inputElemenet, 0)}>

		
		${icon ? `<span class="${"icon svelte-rktlwj"}">${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</span>` : ``}</div>

	${typeof error === "string" ? `<div class="${"error-message svelte-rktlwj"}">${escape(error)}</div>` : ``}
</div>`;
});
const css$1 = {
  code: ".label.svelte-k58h21{margin-bottom:0.75rem}h4.svelte-k58h21,p.svelte-k58h21{margin:0;padding:0}h4.svelte-k58h21{display:block;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;font-size:1rem;font-weight:700;margin-bottom:0.25rem}p.svelte-k58h21{display:block;font-size:0.75rem;line-height:1rem;opacity:0.5;font-weight:300}",
  map: null
};
const Label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { description = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  $$result.css.add(css$1);
  return `<div class="${"label svelte-k58h21"}">${title ? `<h4 class="${"svelte-k58h21"}">${escape(title)}</h4>` : ``}

	${description ? `<p class="${"svelte-k58h21"}">${escape(description)}</p>` : ``}
</div>`;
});
const css = {
  code: ".colors.svelte-1jjidvf{gap:12px;display:flex}.color.svelte-1jjidvf{display:flex;align-items:center;justify-content:center;color:white;font-size:1rem;height:2rem;width:2rem;border-radius:50%;transition:0.1s ease;background-color:var(--accent)}.color.svelte-1jjidvf:hover{cursor:pointer;filter:brightness(1.1)}.color.svelte-1jjidvf:active{transform:scale(0.8)}",
  map: null
};
const ColorPicker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value = "orange" } = $$props;
  const colors = ["red", "orange", "green", "blue", "purple"];
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$result.css.add(css);
  {
    {
      document.documentElement.className = "";
      document.documentElement.classList.add(value);
    }
  }
  return `
<div class="${"colors svelte-1jjidvf"}">${each(colors, (color) => {
    return `<div class="${escape(color, true) + " color svelte-1jjidvf"}">${escape(value === color ? "✓" : "")}
		</div>`;
  })}
</div>`;
});
const form = writable();
const selectedScreen = writable();
const selectedScreenIndex = derived([selectedScreen, form], ([screenKey, form2]) => {
  const index = form2?.screens?.findIndex((screen) => screen.key === screenKey);
  return index === -1 ? 0 : index;
});
form.subscribe((value) => {
  return;
});

export { Button as B, ColorPicker as C, HeadlessForm as H, Input as I, Label as L, Modal as M, TrashBin as T, selectedScreenIndex as a, createSlug as c, form as f, openedModal as o, selectedScreen as s };
//# sourceMappingURL=editor-818a9858.js.map

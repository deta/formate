import { c as create_ssr_component, a as subscribe, v as validate_component, d as each, e as escape, f as null_to_empty, h as add_attribute } from './index-1d30136c.js';
import '@rive-app/canvas';
import { o as openedModal, B as Button, H as HeadlessForm, M as Modal, L as Label, I as Input, C as ColorPicker, T as TrashBin } from './editor-818a9858.js';
import './index3-7ad95f4d.js';

const css$1 = {
  code: "canvas.svelte-q52jml{display:block}",
  map: null
};
const Animation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width } = $$props;
  let { height } = $$props;
  let { src } = $$props;
  let { autoplay = true } = $$props;
  let { onPlay = void 0 } = $$props;
  let { onStop = void 0 } = $$props;
  let { onPause = void 0 } = $$props;
  let canvas;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.autoplay === void 0 && $$bindings.autoplay && autoplay !== void 0)
    $$bindings.autoplay(autoplay);
  if ($$props.onPlay === void 0 && $$bindings.onPlay && onPlay !== void 0)
    $$bindings.onPlay(onPlay);
  if ($$props.onStop === void 0 && $$bindings.onStop && onStop !== void 0)
    $$bindings.onStop(onStop);
  if ($$props.onPause === void 0 && $$bindings.onPause && onPause !== void 0)
    $$bindings.onPause(onPause);
  $$result.css.add(css$1);
  return `<canvas class="${escape(null_to_empty($$props.class), true) + " svelte-q52jml"}"${add_attribute("style", $$props.style, 0)} width="${escape(width, true) + "px"}" height="${escape(height, true) + "px"}"${add_attribute("this", canvas, 0)}></canvas>`;
});
const Plus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"22"}" height="${"22"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M12 5V19"}" stroke="${"black"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M5 12H19"}" stroke="${"black"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>`;
});
const CreateModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $values, $$unsubscribe_values;
  let $hasErrors, $$unsubscribe_hasErrors;
  let $errors, $$unsubscribe_errors;
  const initialValues = { name: "", color: "orange" };
  const validators = {
    name: (value) => {
      if (value.length < 4)
        throw new TypeError("Name must be at least 4 characters");
    }
  };
  const { errors, hasErrors, values, validate, resetKeyError } = HeadlessForm(initialValues, validators);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  $$unsubscribe_hasErrors = subscribe(hasErrors, (value) => $hasErrors = value);
  $$unsubscribe_values = subscribe(values, (value) => $values = value);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Modal, "Modal").$$render($$result, { title: "Create Form" }, {}, {
      default: () => {
        return `<div>${validate_component(Label, "Label").$$render(
          $$result,
          {
            title: "Form Name",
            description: "Name of your form, that will be displayed on the welcome page."
          },
          {},
          {}
        )}
		${validate_component(Input, "Input").$$render(
          $$result,
          { error: $errors.name, value: $values.name },
          {
            value: ($$value) => {
              $values.name = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div>

	<div>${validate_component(Label, "Label").$$render(
          $$result,
          {
            title: "Color Scheme",
            description: "Accent color that will be used in the editor of your forms UI"
          },
          {},
          {}
        )}
		${validate_component(ColorPicker, "ColorPicker").$$render(
          $$result,
          { value: $values.color },
          {
            value: ($$value) => {
              $values.color = $$value;
              $$settled = false;
            }
          },
          {}
        )}</div>

	${validate_component(Button, "Button").$$render($$result, { position: "right", disabled: $hasErrors }, {}, {
          default: () => {
            return `Create`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_values();
  $$unsubscribe_hasErrors();
  $$unsubscribe_errors();
  return $$rendered;
});
const css = {
  code: "button.svelte-6vb4h2.svelte-6vb4h2,a.svelte-6vb4h2.svelte-6vb4h2{all:unset;display:block}h1.svelte-6vb4h2.svelte-6vb4h2{margin:0;font-size:5rem;font-weight:bold;text-align:center;color:var(--text);opacity:0.75}p.svelte-6vb4h2.svelte-6vb4h2{margin:0;font-size:1.25rem;font-weight:lighter;text-align:center;color:var(--text);opacity:0.5}.welcome.svelte-6vb4h2.svelte-6vb4h2{display:flex;min-width:100%;min-height:100vh;align-items:flex-start;justify-content:center;background-color:var(--background)}.content.svelte-6vb4h2.svelte-6vb4h2{padding:10vh 1rem;gap:1rem;display:flex;flex-direction:column;width:100%;max-width:500px}.hero.svelte-6vb4h2.svelte-6vb4h2{padding-bottom:2rem}.hero.svelte-6vb4h2 .logo{display:block;width:12rem;height:12rem;margin-left:auto;margin-right:auto;filter:drop-shadow(0 2px 4px #0000001a)}.list.svelte-6vb4h2.svelte-6vb4h2{display:flex;flex-direction:column;width:100%;border:2px solid;border-radius:0.5rem;border-color:var(--border);background-color:white}.list.svelte-6vb4h2 .item.svelte-6vb4h2{white-space:nowrap;display:flex;align-items:center;justify-content:space-between;border-bottom:2px solid;border-color:var(--border)}.list.svelte-6vb4h2 .item.svelte-6vb4h2:last-of-type{border-bottom:none}.delete.svelte-6vb4h2 svg{display:block;cursor:pointer;opacity:0;pointer-events:none;width:1.25rem;height:1.25rem;transition:0.1s ease}.item.svelte-6vb4h2:hover .delete.svelte-6vb4h2 svg{opacity:0.5;pointer-events:fill}.item.svelte-6vb4h2:hover .delete.svelte-6vb4h2:hover svg{opacity:1}.item.svelte-6vb4h2:hover .delete.svelte-6vb4h2:hover svg *{stroke:var(--danger)}.delete.svelte-6vb4h2.svelte-6vb4h2{margin-right:1rem}.info.svelte-6vb4h2.svelte-6vb4h2{padding:1rem;width:100%;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.indicator.svelte-6vb4h2.svelte-6vb4h2{color:var(--accent);margin-right:0.25rem}.name.svelte-6vb4h2.svelte-6vb4h2{opacity:0.5;transition:0.1s ease}.info.svelte-6vb4h2:hover .name.svelte-6vb4h2{opacity:1}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let forms;
  let $openedModal, $$unsubscribe_openedModal;
  $$unsubscribe_openedModal = subscribe(openedModal, (value) => $openedModal = value);
  let { data } = $$props;
  let animationFinished = false;
  const onAnimationStop = () => animationFinished = true;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  forms = data.forms;
  $$unsubscribe_openedModal();
  return `${$$result.head += `<!-- HEAD_svelte-3f9glm_START -->${$$result.title = `<title>Formate</title>`, ""}<!-- HEAD_svelte-3f9glm_END -->`, ""}

${$openedModal === "create_form" ? `${validate_component(CreateModal, "CreateModal").$$render($$result, {}, {}, {})}` : ``}

<div class="${"welcome orange svelte-6vb4h2"}"><div class="${"content svelte-6vb4h2"}"><div class="${"hero svelte-6vb4h2"}">${validate_component(Animation, "Animation").$$render(
    $$result,
    {
      class: "logo",
      width: 512,
      height: 512,
      src: "./logo.riv",
      onStop: onAnimationStop
    },
    {},
    {}
  )}

			${animationFinished ? `<h1 class="${"svelte-6vb4h2"}">formate</h1>
				<p class="${"svelte-6vb4h2"}">Make forms in a matter of minutes</p>` : ``}</div>

		${animationFinished ? `${forms.length ? `<div class="${"list svelte-6vb4h2"}">${each(forms, (form) => {
    return `<div class="${"item svelte-6vb4h2"}"><a class="${"info svelte-6vb4h2"}" href="${"/editor/" + escape(form.key, true)}"><span class="${escape(form.color, true) + " indicator svelte-6vb4h2"}">⏺</span>
								<span class="${"name svelte-6vb4h2"}">${escape(form.name)}</span></a>

							<button class="${"delete svelte-6vb4h2"}">${validate_component(TrashBin, "TrashBin").$$render($$result, {}, {}, {})}</button>
						</div>`;
  })}</div>` : ``}

			<div>${validate_component(Button, "Button").$$render($$result, { position: "centered", fullWidth: true }, {}, {
    default: () => {
      return `Create form ${validate_component(Plus, "Plus").$$render($$result, {}, {}, {})}`;
    }
  })}</div>` : ``}</div>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-e00fb0bc.js.map

import { c as create_ssr_component, a as subscribe, k as set_store_value, e as escape, v as validate_component, d as each, h as add_attribute, l as createEventDispatcher, m as missing_component } from './index-1d30136c.js';
import { f as form, o as openedModal, B as Button, s as selectedScreen, a as selectedScreenIndex, L as Label, I as Input, c as createSlug, M as Modal, C as ColorPicker, T as TrashBin } from './editor-818a9858.js';
import './index3-7ad95f4d.js';

/* empty css                                                      */const ArrowLeft = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"22"}" height="${"22"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M15 6.00002L9 12L15 18"}" stroke="${"black"}" stroke-opacity="${"1"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>`;
});
const Rocket = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M4 13C7.67019 13.4362 10.5638 16.3298 11 20C12.7971 18.964 13.9315 17.0732 14 15C17.4338 13.7921 19.8018 10.6346 20 7C20 5.34315 18.6569 4 17 4C13.3654 4.19818 10.2079 6.56623 9 10C6.9268 10.0685 5.03603 11.2029 4 13"}" stroke="${"black"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M7 14C4.87095 15.202 3.68415 17.5756 4 20C6.42443 20.3159 8.79803 19.1291 10 17"}" stroke="${"black"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><circle cx="${"15"}" cy="${"9"}" r="${"1"}" stroke="${"black"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></circle></svg>`;
});
const css$6 = {
  code: "header.svelte-19lpp60{position:relative;display:flex;align-items:center;justify-content:space-between;width:100%;height:4rem;gap:0.75rem;padding:1rem 2rem;border-bottom:1px solid;border-color:var(--border)}.left.svelte-19lpp60{width:100%;gap:0.75rem;display:flex;justify-content:start}.center.svelte-19lpp60{width:100%;gap:0.75rem;display:flex;justify-content:center}.right.svelte-19lpp60{width:100%;gap:0.75rem;display:flex;justify-content:flex-end}.go-back.svelte-19lpp60{all:unset;gap:0.25rem;display:flex;align-items:center;justify-content:center;opacity:0.5;transition:0.1s ease}.go-back.svelte-19lpp60:hover{cursor:pointer;opacity:1}.go-back.svelte-19lpp60 svg *{stroke:var(--text)}.go-back.svelte-19lpp60 svg{transition:0.1s ease}.go-back.svelte-19lpp60:hover svg{transform:translateX(-4px)}.form-name.svelte-19lpp60{font-weight:500;max-width:16rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $form, $$unsubscribe_form;
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$result.css.add(css$6);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<header class="${"svelte-19lpp60"}"><div class="${"left svelte-19lpp60"}"><a class="${"go-back svelte-19lpp60"}" href="${"/"}">${validate_component(ArrowLeft, "ArrowLeft").$$render($$result, {}, {}, {})}
			<span>Back to forms</span></a></div>

	<div class="${"center svelte-19lpp60"}"><span class="${"form-name svelte-19lpp60"}">${escape($form?.name)}</span></div>

	<div class="${"right svelte-19lpp60"}">${validate_component(Button, "Button").$$render($$result, { small: true, style: "neutral" }, {}, {
      default: () => {
        return `Settings`;
      }
    })}
		${validate_component(Button, "Button").$$render($$result, { small: true, style: "neutral" }, {}, {
      default: () => {
        return `Preview`;
      }
    })}
		${validate_component(Button, "Button").$$render($$result, { small: true }, {}, {
      default: () => {
        return `Publish${validate_component(Rocket, "Rocket").$$render($$result, {}, {}, {})}`;
      }
    })}</div>

	${``}
</header>`;
  } while (!$$settled);
  $$unsubscribe_form();
  return $$rendered;
});
const Pencil = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M4 20H8L18.5 9.5C19.6046 8.39543 19.6046 6.60457 18.5 5.5C17.3954 4.39543 15.6046 4.39543 14.5 5.5L4 16V20"}" stroke="${"black"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M13.5 6.5L17.5 10.5"}" stroke="${"black"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>`;
});
const css$5 = {
  code: ".editable.svelte-1caa14s.svelte-1caa14s{position:relative;cursor:pointer;display:flex;align-items:center}.input.svelte-1caa14s.svelte-1caa14s{min-height:1rem}.input.svelte-1caa14s.svelte-1caa14s,.input.svelte-1caa14s.svelte-1caa14s:focus,.input.svelte-1caa14s.svelte-1caa14s:active{outline:none}.empty.svelte-1caa14s.svelte-1caa14s{opacity:0.5}.icon.svelte-1caa14s.svelte-1caa14s{opacity:0;transition:0.1s ease;margin-left:0.5rem}.icon.svelte-1caa14s svg{display:block;width:1.25rem;height:1.25rem}.icon.svelte-1caa14s svg *{stroke:var(--text)}.editable.svelte-1caa14s:hover .icon.svelte-1caa14s{opacity:0.3}.editable.svelte-1caa14s:focus-within .icon.svelte-1caa14s{opacity:1}",
  map: null
};
const EditableText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value } = $$props;
  let element;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  $$result.css.add(css$5);
  return `<div class="${"editable svelte-1caa14s"}"><div class="${"input svelte-1caa14s"}" spellcheck="${"false"}" contenteditable${add_attribute("this", element, 0)}>${(($$value) => $$value === void 0 ? `` : $$value)(value)}</div>

	${!value ? `<i class="${"input empty svelte-1caa14s"}" contenteditable>empty</i>` : ``}

	
	<div class="${"icon svelte-1caa14s"}">${validate_component(Pencil, "Pencil").$$render($$result, {}, {}, {})}</div>
</div>`;
});
const css$4 = {
  code: ".card.svelte-1fw91mq.svelte-1fw91mq{position:relative;cursor:pointer;padding:2rem;border-radius:1rem;border:2px solid;border-color:var(--border);background-color:white;transition:border-color 0.1s ease}.card.svelte-1fw91mq.svelte-1fw91mq:hover,.selected.svelte-1fw91mq.svelte-1fw91mq{border-color:var(--accent)}.card.svelte-1fw91mq h3.svelte-1fw91mq,.card.svelte-1fw91mq p.svelte-1fw91mq{display:block;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;width:100%;margin:0;padding:0;font-size:1rem}.card.svelte-1fw91mq h3.svelte-1fw91mq{margin-bottom:0.25rem}.card.svelte-1fw91mq p.svelte-1fw91mq{font-weight:lighter;opacity:0.5}.separator.svelte-1fw91mq.svelte-1fw91mq{width:2px;min-height:1.25rem;margin:0.25rem auto;background-color:var(--border)}.delete.svelte-1fw91mq.svelte-1fw91mq{all:unset;position:absolute;top:1rem;right:1rem;opacity:0;pointer-events:none;transition:0.1s ease}.delete.svelte-1fw91mq svg *{stroke:var(--text)}.card.svelte-1fw91mq:hover .delete.svelte-1fw91mq{opacity:0.3;pointer-events:initial}.delete.svelte-1fw91mq.svelte-1fw91mq:hover{opacity:1 !important}.delete.svelte-1fw91mq:hover svg *{stroke:var(--danger)}.empty.svelte-1fw91mq.svelte-1fw91mq{opacity:0.5;font-style:italic}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { title } = $$props;
  let { description = "" } = $$props;
  let { selected = false } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  $$result.css.add(css$4);
  return `
<div class="${"card-wrapper"}"><div class="${["card svelte-1fw91mq", selected ? "selected" : ""].join(" ").trim()}"><h3 class="${["svelte-1fw91mq", !title ? "empty" : ""].join(" ").trim()}">${escape(title || "empty")}</h3>
		<p class="${["svelte-1fw91mq", !description ? "empty" : ""].join(" ").trim()}">${escape(description || "empty")}</p>

		<button class="${"delete svelte-1fw91mq"}">${validate_component(TrashBin, "TrashBin").$$render($$result, {}, {}, {})}</button></div>

	<div class="${"separator svelte-1fw91mq"}"></div>
</div>`;
});
const Cursor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"22"}" height="${"22"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M10 12H14"}" stroke="${"black"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M9 4C10.6569 4 12 5.34315 12 7V17C12 18.6569 10.6569 20 9 20"}" stroke="${"black"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M15 4C13.3431 4 12 5.34315 12 7V17C12 18.6569 13.3431 20 15 20"}" stroke="${"black"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>`;
});
const css$3 = {
  code: ".field.svelte-13te2w8.svelte-13te2w8{gap:1rem;display:flex;flex-direction:column;padding:2rem 2.25rem;border-bottom:1px solid;border-color:var(--border)}.icon.svelte-13te2w8.svelte-13te2w8{display:flex;align-items:center;justify-content:center;width:3.5rem;height:3.5rem;min-width:3.5rem;min-height:3.5rem;border-radius:50%;background-color:var(--neutral)}.icon.svelte-13te2w8 svg{display:block;width:1.75rem;height:1.75rem}.icon.svelte-13te2w8 svg *{stroke:var(--accent)}.heading.svelte-13te2w8.svelte-13te2w8{position:relative;gap:0.75rem;display:flex;flex-direction:row;align-items:center}.type.svelte-13te2w8.svelte-13te2w8,.title.svelte-13te2w8.svelte-13te2w8{all:unset;display:block}.type.svelte-13te2w8.svelte-13te2w8{opacity:0.5;font-weight:400;font-size:0.75rem;margin-bottom:0.2rem}.title.svelte-13te2w8.svelte-13te2w8{font-weight:400;font-size:1.25rem}.content.svelte-13te2w8.svelte-13te2w8{padding-top:1rem;padding-left:4.25rem;width:100%;display:flex;flex-direction:column;gap:1.5rem}button.svelte-13te2w8.svelte-13te2w8{all:unset;position:absolute;cursor:pointer;top:0;right:0;opacity:0;pointer-events:none;transition:0.1s ease}.field.svelte-13te2w8:hover button.svelte-13te2w8{opacity:0.5;pointer-events:all}button.svelte-13te2w8.svelte-13te2w8:hover{opacity:1 !important}button.svelte-13te2w8:hover svg *{stroke:var(--danger)}",
  map: null
};
const FieldEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $form, $$unsubscribe_form;
  let $selectedScreenIndex, $$unsubscribe_selectedScreenIndex;
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_selectedScreenIndex = subscribe(selectedScreenIndex, (value) => $selectedScreenIndex = value);
  const icons = { "Short text": Cursor };
  let { field } = $$props;
  let { index = 0 } = $$props;
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  $$result.css.add(css$3);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"field svelte-13te2w8"}"><div class="${"heading svelte-13te2w8"}"><button class="${"svelte-13te2w8"}">${validate_component(TrashBin, "TrashBin").$$render($$result, {}, {}, {})}</button>

		<div class="${"icon svelte-13te2w8"}">${validate_component(icons[field.type] || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div>

		<div><small class="${"type svelte-13te2w8"}">${escape(field.type)}</small>
			<h4 class="${"title svelte-13te2w8"}">${$form?.screens?.[$selectedScreenIndex]?.fields?.[index]?.title ? `${validate_component(EditableText, "EditableText").$$render(
      $$result,
      {
        value: $form.screens[$selectedScreenIndex].fields[index].title
      },
      {
        value: ($$value) => {
          $form.screens[$selectedScreenIndex].fields[index].title = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}</h4></div></div>

	<div class="${"content svelte-13te2w8"}">${slots.default ? slots.default({}) : ``}</div>
</div>`;
  } while (!$$settled);
  $$unsubscribe_form();
  $$unsubscribe_selectedScreenIndex();
  return $$rendered;
});
const css$2 = {
  code: ".editor.svelte-11rv4e2.svelte-11rv4e2{height:calc(100vh - 4rem);display:flex;flex-direction:row}.sidebar.svelte-11rv4e2.svelte-11rv4e2{display:flex;flex-direction:column;overflow-x:hidden;overflow-y:auto;height:100%;width:100%;max-width:20rem;padding:2rem;padding-bottom:4rem;background-color:var(--background);border-right:1px solid;border-color:var(--border)}.fields.svelte-11rv4e2.svelte-11rv4e2{width:100%;display:flex;overflow-y:auto;overflow-x:hidden;flex-direction:column;padding-bottom:4rem}.field.svelte-11rv4e2.svelte-11rv4e2{padding:2rem 2.25rem;border-bottom:1px solid;border-color:var(--border)}.buttons.svelte-11rv4e2.svelte-11rv4e2{padding:1rem 2.25rem}h3.svelte-11rv4e2.svelte-11rv4e2{all:unset;display:block;font-size:1.5rem;font-weight:800;padding-bottom:0.25rem}p.svelte-11rv4e2.svelte-11rv4e2{all:unset;display:block;font-size:1.25rem;font-weight:300}.container.svelte-11rv4e2.svelte-11rv4e2{display:flex;width:100%;gap:1rem}.container.svelte-11rv4e2>.svelte-11rv4e2{width:100%}",
  map: null
};
const Editor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $form, $$unsubscribe_form;
  let $selectedScreen, $$unsubscribe_selectedScreen;
  let $selectedScreenIndex, $$unsubscribe_selectedScreenIndex;
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_selectedScreen = subscribe(selectedScreen, (value) => $selectedScreen = value);
  $$unsubscribe_selectedScreenIndex = subscribe(selectedScreenIndex, (value) => $selectedScreenIndex = value);
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if ($form.color) {
        document.documentElement.className = "";
        document.documentElement.classList.add($form.color);
      }
    }
    $$rendered = `<div class="${"editor svelte-11rv4e2"}"><div class="${"sidebar svelte-11rv4e2"}">${each($form.screens, (screen) => {
      return `${validate_component(Card, "Card").$$render(
        $$result,
        {
          title: screen.title,
          description: screen.description,
          selected: $selectedScreen === screen.key
        },
        {},
        {}
      )}`;
    })}

		${validate_component(Button, "Button").$$render($$result, { position: "centered" }, {}, {
      default: () => {
        return `Add Screen`;
      }
    })}</div>

	${$form.screens[$selectedScreenIndex] ? `<div class="${"fields svelte-11rv4e2"}"><div class="${"field svelte-11rv4e2"}"><h3 class="${"svelte-11rv4e2"}">${validate_component(EditableText, "EditableText").$$render(
      $$result,
      {
        value: $form.screens[$selectedScreenIndex].title
      },
      {
        value: ($$value) => {
          $form.screens[$selectedScreenIndex].title = $$value;
          $$settled = false;
        }
      },
      {}
    )}</h3>
					<p class="${"svelte-11rv4e2"}">${validate_component(EditableText, "EditableText").$$render(
      $$result,
      {
        value: $form.screens[$selectedScreenIndex].description
      },
      {
        value: ($$value) => {
          $form.screens[$selectedScreenIndex].description = $$value;
          $$settled = false;
        }
      },
      {}
    )}</p></div>

				${each($form.screens[$selectedScreenIndex].fields, (field, index) => {
      return `${validate_component(FieldEditor, "FieldEditor").$$render($$result, { field, index }, {}, {
        default: () => {
          return `<div class="${"container svelte-11rv4e2"}"><div class="${"svelte-11rv4e2"}">${validate_component(Label, "Label").$$render(
            $$result,
            {
              title: "Field key",
              description: "Unique value, that will be used as a key for this input field"
            },
            {},
            {}
          )}
								${validate_component(Input, "Input").$$render(
            $$result,
            { value: field.fieldKey },
            {
              value: ($$value) => {
                field.fieldKey = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div>
							<div class="${"svelte-11rv4e2"}">${validate_component(Label, "Label").$$render($$result, { title: "Default Value" }, {}, {})}
								${validate_component(Input, "Input").$$render(
            $$result,
            { value: field.defaultValue },
            {
              value: ($$value) => {
                field.defaultValue = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div>
							<div class="${"svelte-11rv4e2"}">${validate_component(Label, "Label").$$render($$result, { title: "Placeholder" }, {}, {})}
								${validate_component(Input, "Input").$$render(
            $$result,
            { value: field.placeholder },
            {
              value: ($$value) => {
                field.placeholder = $$value;
                $$settled = false;
              }
            },
            {}
          )}
							</div></div>
					`;
        }
      })}`;
    })}

				<div class="${"buttons svelte-11rv4e2"}">${validate_component(Button, "Button").$$render($$result, { position: "right", style: "neutral" }, {}, {
      default: () => {
        return `Add Field`;
      }
    })}</div></div>` : ``}
</div>`;
  } while (!$$settled);
  $$unsubscribe_form();
  $$unsubscribe_selectedScreen();
  $$unsubscribe_selectedScreenIndex();
  return $$rendered;
});
const SettingsModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $form, $$unsubscribe_form;
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  let currentTab = "general";
  let previousName = $form.name;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        if (createSlug(previousName) === createSlug($form.slug))
          set_store_value(form, $form.slug = createSlug($form.name), $form);
        previousName = $form.name;
      }
    }
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        title: "Settings",
        tabs: ["general", "preferences"],
        currentTab
      },
      {
        currentTab: ($$value) => {
          currentTab = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${currentTab === "general" ? `<div>${validate_component(Label, "Label").$$render(
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
            { value: $form.name },
            {
              value: ($$value) => {
                $form.name = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div>

		<div>${validate_component(Label, "Label").$$render(
            $$result,
            {
              title: "URL Slug",
              description: "Name of your form, that will be displayed on the welcome page."
            },
            {},
            {}
          )}
			${validate_component(Input, "Input").$$render(
            $$result,
            {
              prefix: window.location.origin + "/f/",
              value: $form.slug
            },
            {
              value: ($$value) => {
                $form.slug = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div>

		<div>${validate_component(Label, "Label").$$render(
            $$result,
            {
              title: "Delete Form",
              description: "Name of your form, that will be displayed on the welcome page."
            },
            {},
            {}
          )}
			${validate_component(Button, "Button").$$render($$result, { style: "danger" }, {}, {
            default: () => {
              return `Delete`;
            }
          })}</div>` : `${currentTab === "preferences" ? `<div>${validate_component(Label, "Label").$$render(
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
            { value: $form.color },
            {
              value: ($$value) => {
                $form.color = $$value;
                $$settled = false;
              }
            },
            {}
          )}</div>` : ``}`}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_form();
  return $$rendered;
});
const Checkbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"22"}" height="${"22"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M9 11L12 14L20 6"}" stroke="${"black"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M20 12V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H15"}" stroke="${"black"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>`;
});
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"22"}" height="${"22"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M11 7H6C4.89543 7 4 7.89543 4 9V18C4 19.1046 4.89543 20 6 20H15C16.1046 20 17 19.1046 17 18V13"}" stroke="${"black"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M10 14L20 4"}" stroke="${"black"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M15 4H20V9"}" stroke="${"black"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>`;
});
const ListCheck = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"22"}" height="${"22"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M3.5 5.5L5 7L7.5 4.5"}" stroke="${"black"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M3.5 11.5L5 13L7.5 10.5"}" stroke="${"black"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M3.5 17.5L5 19L7.5 16.5"}" stroke="${"black"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M11 6H20"}" stroke="${"black"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M11 12H20"}" stroke="${"black"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M11 18H20"}" stroke="${"black"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>`;
});
const Mail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"22"}" height="${"22"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><rect x="${"3"}" y="${"5"}" width="${"18"}" height="${"14"}" rx="${"2"}" stroke="${"black"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></rect><path d="${"M3 7L12 13L21 7"}" stroke="${"black"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>`;
});
const Paragraph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"22"}" height="${"22"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M4 6H9.5"}" stroke="${"black"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M4 10H9.5"}" stroke="${"black"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M4 14H9.5"}" stroke="${"black"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M4 18H9.5"}" stroke="${"black"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M14.5 6H20"}" stroke="${"black"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M14.5 10H20"}" stroke="${"black"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M14.5 14H20"}" stroke="${"black"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M14.5 18H20"}" stroke="${"black"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>`;
});
const Phone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"22"}" height="${"22"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M5 4H9L11 9L8.5 10.5C9.57096 12.6715 11.3285 14.429 13.5 15.5L15 13L20 15V19C20 20.1046 19.1046 21 18 21C9.92765 20.5094 3.49056 14.0724 3 6C3 4.89543 3.89543 4 5 4"}" stroke="${"black"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>`;
});
const Selector = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"22"}" height="${"22"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M8 9L12 5L16 9"}" stroke="${"black"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M16 15L12 19L8 15"}" stroke="${"black"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>`;
});
const SortNumbers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="${"22"}" height="${"22"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M4 15L7 18L10 15"}" stroke="${"black"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M7 6V18"}" stroke="${"black"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M17 3C18.1046 3 19 3.89543 19 5V8C19 9.10457 18.1046 10 17 10C15.8954 10 15 9.10457 15 8V5C15 3.89543 15.8954 3 17 3Z"}" stroke="${"black"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><circle cx="${"17"}" cy="${"16"}" r="${"2"}" stroke="${"black"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></circle><path d="${"M19 16V19C19 20.1046 18.1046 21 17 21H15.5"}" stroke="${"black"}" stroke-width="${"2"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>`;
});
const css$1 = {
  code: ".fields.svelte-b9ni9m.svelte-b9ni9m{padding:1.5rem;gap:1.5rem;display:flex;flex-direction:column}.field.svelte-b9ni9m.svelte-b9ni9m{cursor:pointer;gap:0.75rem;display:flex;align-items:center;flex-direction:row;width:100%}.field.svelte-b9ni9m.svelte-b9ni9m:hover{color:black}.field.svelte-b9ni9m:hover .icon.svelte-b9ni9m svg{opacity:1}.icon.svelte-b9ni9m.svelte-b9ni9m{display:flex;align-items:center;justify-content:center;height:2.5rem;width:2.5rem;min-width:2.5rem;min-height:2.5rem;white-space:nowrap;border-radius:50%;background-color:var(--neutral)}.icon.svelte-b9ni9m svg *{stroke:var(--accent)}.icon.svelte-b9ni9m svg{opacity:0.5;transition:0.1s ease}h3.svelte-b9ni9m.svelte-b9ni9m,p.svelte-b9ni9m.svelte-b9ni9m{all:unset;display:block;font-size:0.9rem}h3.svelte-b9ni9m.svelte-b9ni9m{font-weight:500}p.svelte-b9ni9m.svelte-b9ni9m{font-weight:400;opacity:0.5}",
  map: null
};
const AddFieldModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `${validate_component(Modal, "Modal").$$render($$result, { title: "Add field", paddings: false }, {}, {
    default: () => {
      return `<div class="${"fields svelte-b9ni9m"}">
		<div class="${"field svelte-b9ni9m"}"><div class="${"icon svelte-b9ni9m"}">${validate_component(Cursor, "Cursor").$$render($$result, {}, {}, {})}</div>
			<div><h3 class="${"svelte-b9ni9m"}">Short Text</h3>
				<p class="${"svelte-b9ni9m"}">Small text input for less than 100 symbols. Perfect for names.</p></div></div>

		<div class="${"field svelte-b9ni9m"}"><div class="${"icon svelte-b9ni9m"}">${validate_component(Paragraph, "Paragraph").$$render($$result, {}, {}, {})}</div>
			<div><h3 class="${"svelte-b9ni9m"}">Long Text</h3>
				<p class="${"svelte-b9ni9m"}">Big text input without symbols count limit. Perfect for descriptions.</p></div></div>

		<div class="${"field svelte-b9ni9m"}"><div class="${"icon svelte-b9ni9m"}">${validate_component(SortNumbers, "SortNumbers").$$render($$result, {}, {}, {})}</div>
			<div><h3 class="${"svelte-b9ni9m"}">Number</h3>
				<p class="${"svelte-b9ni9m"}">Input for numbers.</p></div></div>

		<div class="${"field svelte-b9ni9m"}"><div class="${"icon svelte-b9ni9m"}">${validate_component(Checkbox, "Checkbox").$$render($$result, {}, {}, {})}</div>
			<div><h3 class="${"svelte-b9ni9m"}">Checkbox</h3>
				<p class="${"svelte-b9ni9m"}">Input for true / false value.</p></div></div>

		<div class="${"field svelte-b9ni9m"}"><div class="${"icon svelte-b9ni9m"}">${validate_component(Selector, "Selector").$$render($$result, {}, {}, {})}</div>
			<div><h3 class="${"svelte-b9ni9m"}">Dropdown</h3>
				<p class="${"svelte-b9ni9m"}">Input for selection on of the predefined results.</p></div></div>

		<div class="${"field svelte-b9ni9m"}"><div class="${"icon svelte-b9ni9m"}">${validate_component(ListCheck, "ListCheck").$$render($$result, {}, {}, {})}</div>
			<div><h3 class="${"svelte-b9ni9m"}">Select</h3>
				<p class="${"svelte-b9ni9m"}">Input for selection one or multiple values.</p></div></div>

		<div class="${"field svelte-b9ni9m"}"><div class="${"icon svelte-b9ni9m"}">${validate_component(Mail, "Mail").$$render($$result, {}, {}, {})}</div>
			<div><h3 class="${"svelte-b9ni9m"}">Email</h3>
				<p class="${"svelte-b9ni9m"}">Email input</p></div></div>

		<div class="${"field svelte-b9ni9m"}"><div class="${"icon svelte-b9ni9m"}">${validate_component(Phone, "Phone").$$render($$result, {}, {}, {})}</div>
			<div><h3 class="${"svelte-b9ni9m"}">Phone Number</h3>
				<p class="${"svelte-b9ni9m"}">Input for phone numbers</p></div></div>

		<div class="${"field svelte-b9ni9m"}"><div class="${"icon svelte-b9ni9m"}">${validate_component(Link, "Link").$$render($$result, {}, {}, {})}</div>
			<div><h3 class="${"svelte-b9ni9m"}">Link</h3>
				<p class="${"svelte-b9ni9m"}">Input for HTTP links.</p></div></div>

		

		

		</div>`;
    }
  })}`;
});
const css = {
  code: ".wrapper.svelte-1b2p4oa{display:flex;flex-direction:column;overflow:hidden;height:100vh}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $form, $$unsubscribe_form;
  let $openedModal, $$unsubscribe_openedModal;
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_openedModal = subscribe(openedModal, (value) => $openedModal = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  set_store_value(form, $form = data.form, $form);
  $$unsubscribe_form();
  $$unsubscribe_openedModal();
  return `${$$result.head += `<!-- HEAD_svelte-175z3pz_START -->${$$result.title = `<title>Formate | ${escape($form.name)}</title>`, ""}<!-- HEAD_svelte-175z3pz_END -->`, ""}

${$openedModal === "settings" ? `${validate_component(SettingsModal, "SettingsModal").$$render($$result, {}, {}, {})}` : ``}

${$openedModal === "add_field" ? `${validate_component(AddFieldModal, "AddFieldModal").$$render($$result, {}, {}, {})}` : ``}

<div class="${"wrapper svelte-1b2p4oa"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
	${validate_component(Editor, "Editor").$$render($$result, {}, {}, {})}
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-d4bec8da.js.map

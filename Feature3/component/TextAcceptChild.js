import { html } from "https://unpkg.com/htm/preact/standalone.module.js";
/* child to TextAcceptParent.js */
/*creates a text box and allows for a passed type, for the purpose of changing the placeholder text as well as eventually changing the id (in parent) */
export default function textAcceptChild({ type }) {
  return html`
    <h3>Add ${type}</h3>
    <div class="${type}Label">
      <input type="text" placeholder="Enter your ${type}" id="new${type}" />
    </div>
  `;
}

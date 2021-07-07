import { html } from "https://unpkg.com/htm/preact/standalone.module.js";
/* child to Upload.js */
/* simple label maker to change the cursor as it mouses over the upload link and allow text to be passed in for the content on the link */
export default function ChildLabel({ text, cursorLook }) {
  return html`
    <div class="childLabel">
      <label for="file" style=${cursorLook}>${text}</label>
    </div>
  `;
}

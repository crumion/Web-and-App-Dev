import { html } from "https://unpkg.com/htm/preact/standalone.module.js";
import ChildLabel from "./childLabel.js";
/* Parent to childLabel.js */
/* takes in and puts out an image using createObjectURL and getElementByID, opening Finder/File Explorer onchange and allowing the file to be uploaded */
export default function Upload({ event }) {
  function UploadtheFile(event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
  }
  return html`
    <p>
      <input
        type="file"
        accept="image/*"
        name="image"
        id="file"
        onchange=${UploadtheFile}
        style="display: none;"
      />
    </p>
    <p>
      <${ChildLabel} cursorLook="cursor: pointer;" text="Upload Image Here" />
    </p>
    <p><img id="output" width="200" /></p>
  `;
}

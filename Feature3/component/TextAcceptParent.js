import { html } from "https://unpkg.com/htm/preact/standalone.module.js";
import textAcceptChild from "./TextAcceptChild.js";
/* parent to TextAcceptChild.js */
/* 4 separate functions, one for each Product, Price, Name, Email */
export default function textAcceptParent({ event }) {
  /* save the value which has the id "new_____" as inputVal, then write inputVal to the page in the paragraph which has the tag "pX" */
  function textAccept1() {
    var inputVal = document.getElementById("newProduct").value;
    document.getElementById("p1").innerHTML = inputVal;
  }
  function textAccept2() {
    var inputVal = document.getElementById("newPrice").value;
    document.getElementById("p2").innerHTML = inputVal;
  }
  function textAccept3() {
    var inputVal = document.getElementById("newName").value;
    document.getElementById("p3").innerHTML = inputVal;
  }
  function textAccept4() {
    var inputVal = document.getElementById("newEmail").value;
    document.getElementById("p4").innerHTML = inputVal;
  }
  /* Future TODO: make this all into one function which passes "new${type}" as an argument (no idea how to do this with template literals currently) so that only one function needs to be called (4 times). */
  /* calls textAcceptChild which makes the input field, and passes in each respective type, then creates a button with which to submit the content of the box, then displays it below the submit button.*/
  return html`
    <${textAcceptChild} type="Product" />
    <br />
    <button onclick="${textAccept1}">Submit</button>
    <p id="p1"></p>
    <${textAcceptChild} type="Price" />
    <br />
    <button onclick="${textAccept2}">Submit</button>
    <p id="p2"></p>
    <${textAcceptChild} type="Name" />
    <br />
    <button onclick="${textAccept3}">Submit</button>
    <p id="p3"></p>
    <${textAcceptChild} type="Email" />
    <br />
    <button onclick="${textAccept4}">Submit</button>
    <p id="p4"></p>
  `;
}

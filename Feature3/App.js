import {
  html,
  render,
  useState,
  useEffect
} from "https://unpkg.com/htm/preact/standalone.module.js";
import Upload from "./component/Upload.js";
import { getInfos } from "./services/info.js";
import textAcceptParent from "./component/TextAcceptParent.js";

/*  */
function App() {
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    return getInfos().then((data) => {
      setInfos(data);
    });
  });
  /* html outline of the page, bringing in each parent as well as adding some additional text and parsing the json */
  return html`
    <h1>Get Rid of My Stuff</h1>
    <h2>A Marketplace for Buyers and Sellers Alike</h2>
    <br />
    <h3>Brought to you by Tyler Horwitz & Colton Crum</h3>
    <br />
    <hr></hr>
    <br />
    <h1>POST A NEW ITEM</h1>
    <${Upload} />
    <${textAcceptParent} />
    <br />
    <h1>CURRENTLY AVAILABLE ITEMS</h1>
    <ul>
      ${infos.map(
        (info) =>
          html` <li key="${info}" class="test">
            <h2>${info.product} | $${info.price}</h1>
            <img src="${info.image}" width="400" height="300"/>
            <br />
            <h4>Posted by: ${info.name}</h3>
            <h4>Contact Info: ${info.email}</h3>
            <br />
          </li>`
      )}
    </ul>
    <br />
  `;
}

render(html` <${App} /> `, document.getElementById("app"));

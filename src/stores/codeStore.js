import { defineStore } from "pinia";

export const useCodeStore = defineStore("code", {
  state: () => ({
  "html": "<body>\n  <h1>\n    Quick Demo\n  </h1>\n  <section id=\"api-demo\">\n    <div>Response from API -</div>\n    <code id=\"response-panel\">Hit the Get response button to get response</code>\n    <br>\n    <button id=\"get-response-btn\" onclick=\"getApiResponse()\">Get Response From /Hello</button>\n  </section>\n</body>",
  "css": "h1 {\n  color: red;\n}\ncode {\n  background-color: #f3f3f3;\n  padding: 1rem;\n  margin: 1rem;\n}\n#api-demo {\n  background-color: ;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  border-color: red;\n  border-width: 5px;\n  border-style: dashed;\n  margin: 1rem;\n  padding: 0.5rem;\n}",
  "js": "async function getApiResponse() {\n  const endpoint = '/qres/Hello'\n  try {\n    const reqonse = await fetch(endpoint)\n    console.log(reqonse)\n    const testResponse = await reqonse.text()\n    document.getElementById(\"response-panel\").textContent = \"Api says - \" + testResponse\n  } catch(error) {\n    console.log(error)\n    document.getElementById(\"response-panel\").textContent = \"Some error happened hitting reload on API server might help\"\n  }\n}"
}),

  getters: {
    finalCode(state) {
      return `<html><head> <title> Hello </title> </head> <body> ${state.html} </body> <script>${state.js}</script><style>${state.css}</style></html>`;
    },
  },

  actions: {
    pushCode(section, payload) {
      if (["html", "css", "js"].includes(section)) this[section] = payload;
    },
  },
});

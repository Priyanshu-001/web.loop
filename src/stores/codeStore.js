import { defineStore } from "pinia";

export const useCodeStore = defineStore("code", {
  state: () => ({
    html: "",
    js: "",
    css: "",
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

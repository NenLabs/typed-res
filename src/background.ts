import browser from "webextension-polyfill";

console.log("Hello from the background!");

browser.runtime.onInstalled.addListener((details) => {
  console.log("Extension installed:", details);
});

Browser.devtools.panels.create("TypedRes",
    "/icon-with-shadow.svg",
    "src/popup.html",
);
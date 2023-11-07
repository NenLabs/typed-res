import browser from "webextension-polyfill";

browser.devtools.panels.create("TypedRes",
    "/icon-with-shadow.svg",
    "src/popup.html",
);
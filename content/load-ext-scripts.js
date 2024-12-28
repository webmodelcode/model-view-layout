document.head.appendChild(
  Object.assign(document.createElement("script"), {
    src: chrome.runtime.getURL("content/main.js"),
    type: "module",
  })
);

import App from "./app";

import { router, navigateTo } from "./core/Router";

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    const target = e.target as HTMLAnchorElement;
    if (target && target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(target.href);
    }
  });
  router();
});
new App(document.querySelector("#app") as HTMLElement);

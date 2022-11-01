import MainView from "../views/MainView";
import LoginView from "../views/LoginVIew";
import { getDom } from "../utils";
interface Routes {
  path: string;
  view: any;
}

const pathToRegex = (path: string) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const navigateTo = (url: string) => {
  history.pushState(null, "", url);
  router();
};

const router = async () => {
  const routes: Routes[] = [
    { path: "/", view: MainView },
    { path: "/login", view: LoginView },
  ];

  // Test each route for potential match
  const potentialMatches = routes.map((route) => ({
    route: route,
    result: location.pathname.match(pathToRegex(route.path)),
  }));

  let match = potentialMatches.find(
    (potentialMatch) => potentialMatch.result !== null
  );

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname],
    };
  }

  const mainRoot = getDom("#main");

  mainRoot.innerHTML = new match.route.view(mainRoot).template();
};

export { router, navigateTo };

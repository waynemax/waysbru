import createRouter, { Options } from "router5";
import browserPlugin from "router5-plugin-browser";
import listenersPlugin from "router5-plugin-listeners";
import { Route } from "./shared/definitions";

const routesFint = [
  {
    name: Route.MAIN_SCREEN,
    path: "/",
  },
  {
    name: Route.SETTINGS_SCREEN,
    path: "/" + Route.SETTINGS_SCREEN,
  },
  {
    name: Route.NOT_FOUND,
    path: `/${Route.NOT_FOUND}`,
  },
];

export const routes = routesFint;

const params: Options | any = {
  defaultRoute: Route.NOT_FOUND,
  defaultParams: {},
  queryParamsMode: "loose",
  strictTrailingSlash: true,
};

const router = createRouter(routes, params);

router.usePlugin(
  browserPlugin({
    base: "",
    useHash: false,
    hashPrefix: "",
    mergeState: true,
    preserveHash: false,
    forceDeactivate: true,
  }),
);

router.usePlugin(listenersPlugin());

router.start();

export default router;

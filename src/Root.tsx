import {
  RootRoute,
  Route,
  Router,
  RouterProvider,
  lazy,
} from "@tanstack/router";

import App from "./App";
import { HomePage } from "./pages";
import { DropletProvider } from "./providers";

const rootRoute = new RootRoute({
  component: App,
});

const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <HomePage />,
});

const contactRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: lazy(() => import("./pages"), "ContactPage"),
});

const fallbackRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/*",
  component: lazy(() => import("./pages"), "ErrorPage"),
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  contactRoute,
  fallbackRoute,
]);

const router = new Router({ routeTree });

declare module "@tanstack/router" {
  interface Register {
    router: typeof router;
  }
}

const Root = () => {
  return (
    <>
      <DropletProvider>
        <RouterProvider router={router} />
      </DropletProvider>
    </>
  );
};

export default Root;

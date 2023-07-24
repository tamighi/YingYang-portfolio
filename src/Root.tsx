import {
  RootRoute,
  Route,
  Router,
  RouterProvider,
  lazy,
} from "@tanstack/router";

import { ThemeProvider } from "styled-components";

import App from "./App";
import { HomePage } from "./pages";

import GlobalStyles from "./GlobalStyles";
import { lightTheme } from "./constants";

const rootRoute = new RootRoute({
  component: App,
});

const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <HomePage />,
});

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: lazy(() => import("./pages"), "AboutPage"),
});

const skillsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/skills",
  component: lazy(() => import("./pages"), "SkillsPage"),
});

const workRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/work",
  component: lazy(() => import("./pages"), "WorkPage"),
});

const blogRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/blog",
  component: lazy(() => import("./pages"), "BlogPage"),
});

const fallbackRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/*",
  component: lazy(() => import("./pages"), "ErrorPage"),
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  skillsRoute,
  workRoute,
  blogRoute,
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
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
};

export default Root;

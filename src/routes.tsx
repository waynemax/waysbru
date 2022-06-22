import React from "react";
import { useRoute } from "react-router5";
import { Main, Settings } from "./pages";
import MainWrapper from "./pages/wrappers/MainWrapper";
import { NotFound } from "./pages/NotFound";
import { Route } from "./shared/definitions";

export default function Routes() {
  const routeState = useRoute();
  let Component: any = Main;
  const Wrapper: any = MainWrapper;

  switch (routeState.route.name) {
    case Route.MAIN_SCREEN:
      Component = Main;
      break;
    case Route.SETTINGS_SCREEN:
      Component = Settings;
      break;
    default:
      Component = NotFound;
      break;
  }

  return (
    <Wrapper routeState={routeState}>
      <Component routeState={routeState} />
    </Wrapper>
  );
}

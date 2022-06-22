import "./shared/static/styles/common.scss";
import React from "react";
import { configureRootTheme } from "@yandex/ui/Theme";
import { theme } from "@yandex/ui/Theme/presets/default";
import Routes from "./routes";
import { useRoute } from "react-router5";

configureRootTheme({ theme });

const App = (props: any) => {
  const { route } = useRoute();
  return <Routes router={route !== undefined ? route : {}} {...props} />;
};

export default App;

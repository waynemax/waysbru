import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider } from "react-router5";
import { RecoilRoot } from "recoil";
import router from "./router";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <RouterProvider router={router}>
    <RecoilRoot>
      <App router={router} />
    </RecoilRoot>
  </RouterProvider>,
);

import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import "./styles/reset.scss";
import { Provider } from "react-redux";
import Store from "./redux/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  </Provider>
);

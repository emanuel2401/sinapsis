import React from "react";
import { Provider } from "react-redux";
import store from "./app/store";
import App from "./App";
import ReactDOM from "react-dom";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

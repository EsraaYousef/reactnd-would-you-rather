import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import reducer from "./reducers";
import middleware from "./middleware";
import { createStore } from "redux";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

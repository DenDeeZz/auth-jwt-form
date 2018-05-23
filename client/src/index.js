import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import store from "./store";
import CForm from "./App";

const App = () => (
  <Provider store={store}>
    <CForm />
  </Provider>
);

render(<App />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { persistor } from "./slices/index.js";
import store from "./slices/index.js";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

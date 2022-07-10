import React from "react";
import ReactDOM from "react-dom/client";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import { Provider } from "react-redux";

import { configStore } from "./store";
import App from "./components/App";

const store = configStore();
const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* loading here is to show something while the view loads */}
      <PersistGate persistor={persistor} loading={<h3>Loading...</h3>}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

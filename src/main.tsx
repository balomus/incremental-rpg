import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./styles/index.css";
import { Provider } from "./context/player";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);

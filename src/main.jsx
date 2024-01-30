import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { OnContextProvider } from "./context/OnContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <OnContextProvider>
      <App />
    </OnContextProvider>
  </React.StrictMode>
);

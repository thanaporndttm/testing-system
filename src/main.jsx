import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import { PublicClientApplication, EventType } from "@azure/msal-browser";

import App from "./App.jsx";
import { msalConfig } from "./configs/msal-configs.js";

import Routes from "./routes";

export const msalInstance = new PublicClientApplication(msalConfig);

if (
  !msalInstance.getActiveAccount() &&
  msalInstance.getAllAccounts().length > 0
)
  msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0]);

msalInstance.enableAccountStorageEvents();

msalInstance.addEventCallback((event) => {
  if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account)
    msalInstance.setActiveAccount(event.payload.account);
});

const router = createBrowserRouter(Routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App pca={msalInstance} router={router} />
  </React.StrictMode>
);

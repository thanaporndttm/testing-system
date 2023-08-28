import { useEffect } from "react";

import { InteractionStatus } from "@azure/msal-browser";
import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import { loginRequest } from "../configs/msal-configs";

// const pca = new PublicClientApplication(msalConfig);

export default function SignInAzureADPage() {
  const { instance, inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  useEffect(
    function () {
      function autoSignIn() {
        instance.loginRedirect(loginRequest);
      }

      if (
        InteractionStatus.None === inProgress &&
        !isAuthenticated &&
        (document.readyState === "interactive" ||
          document.readyState === "complete")
      )
        autoSignIn();
    },
    [instance, isAuthenticated, inProgress]
  );

  return <h1>SignInWithAzureAD</h1>;
}

import PropTypes from "prop-types";
import { PublicClientApplication, InteractionType } from "@azure/msal-browser";
import {
  MsalProvider,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { RouterProvider } from "react-router-dom";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import { loginRequest } from "./configs/msal-configs";
import { CustomNavigationClient } from "./utils/navigation-client";
import SignInAzureADPage from "./pages/SignInAzureADPage";

const customizedTheme = createTheme({
  palette: {
    primary: {
      main: "#00A8A9",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ED6F2D",
    },
  },
});

function App(props) {
  const { pca, router } = props;
  const navigationClient = new CustomNavigationClient(router.navigate);
  pca.setNavigationClient(navigationClient);

  return (
    <MsalProvider instance={pca}>
      <ThemeProvider theme={customizedTheme}>
        <CssBaseline />
        <AuthenticatedTemplate
          InteractionType={InteractionType.Redirect}
          authenticationRequest={loginRequest}
        >
          <RouterProvider router={router} />
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <SignInAzureADPage />
        </UnauthenticatedTemplate>
      </ThemeProvider>
    </MsalProvider>
  );
}

App.propTypes = {
  pca: PropTypes.instanceOf(PublicClientApplication),
  router: PropTypes.object,
};

export default App;

import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { Page } from "../components/page/page";
import { authenticationStore } from "../service/authentication.service";

export function Home() {
  const authenticated = authenticationStore(
    (state: any) => state.isAuthenticated
  );
  const navigate = useNavigate();

  React.useEffect(() => {
    if (authenticated) navigate("/dashboard");
  }, [authenticated]);

  return (
    <Page>
      <img
        src={logo}
        alt="logo"
      />
    </Page>
  );
}

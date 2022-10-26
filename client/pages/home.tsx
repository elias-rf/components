import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { Page } from "../components/page/page";
import { authenticationService } from "../service/authentication.service";
import { userStore } from "../state/user-store";

export function Home() {
  const authenticated = userStore((state: any) => state.isAuthenticated);
  const navigate = useNavigate();

  React.useEffect(() => {
    authenticationService.isAuthenticated();
  }, []);

  React.useEffect(() => {
    if (authenticated) navigate("/dashboard");
  }, [authenticated]);

  React.useEffect(() => {
    authenticationService.isAuthenticated();
  }, []);
  return (
    <Page title="Home">
      <img src={logo} alt="logo" />
    </Page>
  );
}
